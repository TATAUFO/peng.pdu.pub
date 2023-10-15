window.addEventListener('load', async () => {
    // 检查是否存在 MetaMask
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        // 检验是否是MARO的网络
        web3.eth.net.getId()
            .then(networkId => {
                if (networkId === 8848) {
                    // 当前是MARO的主链
                    console.log('current block chain is MARO mainnet');
                } else {
                    // TODO: 切换网络
                    ethereum.request({
                        "method": "wallet_switchEthereumChain",
                        "params": [
                          {
                            "chainId": "0x2290"
                          }
                        ]
                      });

                }
            })
            .catch(error => {
                console.error('unable to get chain Id', error);
            });

        try {
            // 请求用户授权
            await window.ethereum.enable();

            // 创建合约实例
            const contractAddress = '0x78A5379D8caEDaC0eD38cf0237e32Cc022294cfA'; // 合约地址
            const contractABI = [{"constant": false,"inputs": [{"name": "_amount","type": "uint256"}],"name": "addNew","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [],"name": "withdraw","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "user","type": "address"},{"indexed": false,"name": "amount","type": "uint256"}],"name": "ADD_NEW","type": "event"},{"constant": true,"inputs": [],"name": "getCoinBase","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "blockNumber","type": "uint256"}],"name": "getHash","outputs": [{"name": "","type": "bytes32"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "blockNumber","type": "uint256"}],"name": "getValueAtBlock","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "million","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "myDep","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "myNum","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "myValue","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "num","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // 监听MetaMask账户变化
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    // 更新当前账户
                    currentAccount = accounts[0];
                    console.log('当前账户：', currentAccount);
                } else {
                    // 用户切换了账户或离开了页面
                    currentAccount = null;
                }
            });

            // 连接MetaMask
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                console.log('当前账户：', currentAccount);
            }

            // 按钮点击事件：调用合约中的abc方法
            document.getElementById('call-contract-button').addEventListener('click', async () => {
                try {
                    // 调用合约中的需要用户的view方法
                    const result = await contract.methods.myNum().call({from: currentAccount});
                    console.log('myNum方法返回值：', result);

                    // 调用不需要用户的view方法
                    const result2 = await contract.methods.getCoinBase().call();
                    console.log('getCoinBase方法返回值：', result2);

                    // 调用需要参数，需要pay的方法
                    const amount = 555;
                    contract.methods.addNew(amount).send({ from: currentAccount, value: web3.utils.toWei('0.015', 'ether')})
                    .on('transactionHash', function(hash) {
                        console.log('transactionHash', hash);
                    })
                    .on('receipt', function(receipt){
                        console.log('receipt', receipt);
                        console.log('events', receipt.events);

                        // 获取并显示事件，需要知道事件名称
                        var events = receipt.events.ADD_NEW;
                        if (Array.isArray(events) === false) {
                            events = [events];
                        }
                        events.forEach(function(event) {
                            // 此处可根据用户地址进行过滤
                            const rv = event.returnValues;
                            // console.log('detail', rv);
                            console.log('user', rv.user);
                            console.log('amount', rv.amount);
                        });
                        
                    })
                    // .on('confirmation', function(confirmationNumber, receipt) {
                    //     console.log('confirmation', confirmationNumber, receipt);
                    // })
                    .on('error', console.error);

                } catch (error) {
                    console.error('调用合约方法时出错：', error);
                }
            });
        } catch (error) {
            console.error('连接MetaMask时出错：', error);
        }
    } else {
        console.error('MetaMask未安装，请先安装MetaMask插件');
    }
});
