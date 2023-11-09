pragma solidity ^0.4.19;

import "./SafeMath.sol";
import "./PermissionGroups.sol";

// Excavator 挖掘机
contract Excavator is PermissionGroups {
    using SafeMath for uint;
    uint constant public decimals = 18;

    struct Record {
        uint deposit;
        uint result;
        uint divisor;
        uint remainder;
        uint blockNum;
        bool finish;
        uint prize;
    }

    mapping(address => Record[]) public recordMap;  // 记录列表
    mapping(address => uint) public recordNum;      // 用户记录次数
    mapping(address => uint) public currentMine;     // 进行中的挖矿  address => blockNum
    address[] public currentMiners;  // 进行中的用户  [address]
    
    uint public minDeposit = 10**decimals * 1;  // 单笔最小交易额度限制
    uint public maxDeposit = minDeposit * 100;  // 单笔最大交易额度限制
    uint public maxDepositPercentage = 50;      // 单笔最大交易赔付奖池占比

    address public adminWithdrawAddr;           // 管理地址

    uint public minGas = 10**decimals;          // 最低收费额度
    uint public stdGasPercentage = 5;           // 超过minGas的奖金占比

    bool public systemSuspend = false;          // 临时暂停
    bool public systemTermination = false;      // 合约永久终止

    uint public poolSize = 0;                   // 奖励池合计
    uint public avaliableSize = 0;              // 当前可赔付池合计

    uint public totalNum = 0;                   // 所有挖矿数量

    // t是总的序号，n是这个用户的序号，根据n和addr可以查到记录，根据记录可以查询，或者根据status和amount判断含义
    event M(uint indexed t, uint indexed n, address indexed addr, uint status, uint amount);

    // 将当前块的blocknumber放入自己的数据库信息当中
    function mining(uint _divisor, uint _remainder) public payable {
        require(!systemSuspend && !systemTermination);

        // divisor作为除数不能为零
        require(_divisor > 0 && _remainder < _divisor);

        // 必须要前一个结束，或者第一次玩
        if (recordNum[msg.sender] > 0 ){
            uint minerIndex = recordNum[msg.sender] - 1;
            if (!recordMap[msg.sender][minerIndex].finish) {
                seal();
            }
        }

        // 检验钱数，超过最小必须得值
        require(msg.value >= minDeposit && msg.value <= maxDeposit);
        // 小于奖池的设定占比
        uint prize = msg.value.mul(_divisor);
        require(prize < poolSize.div(100).mul(maxDepositPercentage));
        require(prize <= avaliableSize);

        // 总记录数增长
        totalNum = totalNum + 1;
        // 记录数增长
        recordNum[msg.sender] = recordNum[msg.sender] + 1;
        // 写入新的记录
        Record[] storage records = recordMap[msg.sender];
        records.push(Record({
            deposit: msg.value,
            result: 0,
            divisor: _divisor,
            remainder: _remainder,
            blockNum: block.number,
            finish: false,
            prize: 0
        }));

        // 增加奖池总量
        poolSize = poolSize + msg.value;
        // 更新可用奖池
        avaliableSize = avaliableSize + msg.value;
        avaliableSize = avaliableSize.sub(prize);

        // 添加当前进行的mine
        addCurrentMiner(msg.sender);

        M(totalNum, recordNum[msg.sender], msg.sender, 1, msg.value);

    }

    function getRecords(address _addr, uint256 _fromIndex, uint256 _toIndex) public view returns(Record[]){
        uint256 _size =  _toIndex.sub(_fromIndex);
        Record[] memory _records = new Record[](_size);
        uint256 _rIndex = 0;
        for(uint i= _fromIndex; i< _toIndex; i++){
             _records[_rIndex] = recordMap[_addr][i];
             _rIndex++;
        }
        return _records;
    }

    function addCurrentMiner(address _addr) internal {
        // 添加到总的记录当中
        currentMine[_addr] = block.number;
        currentMiners.push(_addr);
    }

    function delCurrentMiner(address _addr) internal {
        // 从currentMine中删除
        delete currentMine[_addr];
        for (uint i = 0; i < currentMiners.length; i++) {
            if (keccak256(currentMiners[i]) == keccak256(_addr)) {
                for (uint j=i; j< currentMiners.length - 1; j++) {
                    currentMiners[j] = currentMiners[j + 1];
                }
                currentMiners.length--;
                break;
            }
        }
    }

    // 封装blockNumber在num之前的mine，以释放avaliable的奖池
    function sealByAdmin(uint _blockNum, uint _startIndex) public onlyAdmin {
        for (uint i = _startIndex; i < currentMiners.length; i++) {
            if (currentMine[currentMiners[i]] < _blockNum) {
                sealAction(currentMiners[i]);
            }
        }
    }


    // seal 就是封装，用来得到结果的操作，获得奖金的
    function seal() public {
        require(!systemTermination);
        require(recordNum[msg.sender] > 0);
        sealAction(msg.sender);
    }

    // 
    function sealAction(address _addr) internal {

        uint minerIndex = recordNum[_addr] - 1;
        Record storage record = recordMap[_addr][minerIndex];
        require(!record.finish);

        uint hashNum = uint256(block.blockhash(record.blockNum));  // 注意在判定时候，要判断hashNum > 0
        uint remainder = hashNum % record.divisor;
        uint prize = record.deposit.mul(record.divisor);

        if (remainder == record.remainder && hashNum > 0) {     // 增加hashNum > 0 的 判定是用于过滤时间过长的交易，必须加
            uint gas = prize.div(100).mul(stdGasPercentage);
            if (gas < minGas) {
                gas = minGas;
            }
            prize = prize.sub(gas);
            _addr.transfer(prize);
            poolSize = poolSize.sub(prize);
            avaliableSize = avaliableSize.add(gas);
            record.prize = prize;
            M(totalNum, recordNum[_addr], _addr, 2, prize);
        } else {
            avaliableSize = avaliableSize.add(prize);
            M(totalNum, recordNum[_addr], _addr, 2, 0);
        }

        record.result = remainder;
        record.finish = true;
        recordMap[_addr][minerIndex] = record;

        delCurrentMiner(_addr);

    }

    // 设定大部分参数
    function Excavator() public{
        adminWithdrawAddr = msg.sender;
    }
    
    function incPool() public payable onlyAdmin {
        poolSize = poolSize.add(msg.value);
        avaliableSize = avaliableSize.add(msg.value);
    }

    function decsPool(uint v) public onlyAdmin {
        uint decsValue = 10**decimals * v;
        poolSize = poolSize.sub(decsValue);
        avaliableSize = avaliableSize.sub(decsValue);
        require(poolSize >= 0);
        adminWithdrawAddr.transfer(decsValue);
    }

    function switchSuspend() public onlyAdmin {
        systemSuspend = !systemSuspend;
    }

    function termination() public onlyAdmin {
        // 不能再打开
        systemTermination = true;
    }
    function resetMinDeposit(uint v) public onlyAdmin {
        minDeposit = 10**decimals * v;
        require(minDeposit > minGas && minDeposit <= maxDeposit);
    }

    function resetMaxDeposit(uint v) public onlyAdmin {
        maxDeposit = 10**decimals * v;
        require(maxDeposit >= minDeposit);
    }

    function resetMaxDepositPercentage(uint v) public onlyAdmin {
        require(v > 0 && v <= 100);
        maxDepositPercentage = v;
    }

    function resetAdminAddress(address addr) public onlyAdmin {
        adminWithdrawAddr = addr;
    }


    function resetMinGas(uint v) public onlyAdmin {
        minGas = 10**decimals * v;
        require(minGas < minDeposit);
    }

    function resetStdGasPercentage(uint v) public onlyAdmin {
        require(v >= 0 && v <= 100);
        stdGasPercentage = v;
    }

}