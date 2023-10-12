window.addEventListener('load', async () => {
    // 检查是否存在 MetaMask
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        try {
            // 请求用户授权
            await window.ethereum.enable();

            // 创建合约实例
            const contractAddress = '0xfd924719744a1c26e891b745C60B25282DD139E8'; // 合约地址
            const contractABI = [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "addNew",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdraw",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getCoinBase",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "blockNumber",
                            "type": "uint256"
                        }
                    ],
                    "name": "getHash",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "blockNumber",
                            "type": "uint256"
                        }
                    ],
                    "name": "getValueAtBlock",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "million",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "myDep",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "myNum",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "myValue",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "num",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
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
                    // 调用合约中的abc方法
                    const result = await contract.methods.myNum().call();
                    console.log('方法返回值：', result);
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
