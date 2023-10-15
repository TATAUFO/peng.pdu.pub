pragma solidity ^0.4.19;

contract Game {
    uint constant public million = 10**6;

    mapping(address => uint) public myDep;
    mapping(address => uint) public num;
    
    event ADD_NEW(address indexed user, uint256 amount);


    function addNew(uint _amount) public payable {
        // require(msg.value > 0);
        if (myDep[msg.sender] > 0) {
            myDep[msg.sender] = myDep[msg.sender] + msg.value;
        } else {
            myDep[msg.sender] = msg.value;
        }

        num[msg.sender] = _amount;
        ADD_NEW(msg.sender, _amount);
    }

    function withdraw() public {
        require(myDep[msg.sender] > 0);
        uint amount = myDep[msg.sender];
        myDep[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    function myValue() public view returns (uint) {
        return myDep[msg.sender];
    }

    function myNum() public view returns (uint) {
        return num[msg.sender];
    }

    function getValueAtBlock(uint256 blockNumber) public view returns (uint256) {
        return uint256(block.blockhash(blockNumber));
    }

    function getHash(uint blockNumber) public  view returns (bytes32) {
        return block.blockhash(blockNumber);
    }

    function getCoinBase() public view returns (address) {
        return block.coinbase;
    }

    
}