const contractAddress = '0x8e27ea6BaCc00667577D237C0930eC6F01A2f31F'; // 合约地址
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "addOperator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "decsPool",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "incPool",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_divisor",
				"type": "uint256"
			},
			{
				"name": "_remainder",
				"type": "uint256"
			}
		],
		"name": "mining",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "operator",
				"type": "address"
			}
		],
		"name": "removeOperator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "resetAdminAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "resetMaxDeposit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "resetMaxDepositPercentage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "resetMinDeposit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "resetMinGas",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "resetStdGasPercentage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "seal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "switchSuspend",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "termination",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "transferAdmin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "t",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "n",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "status",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "M",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "newOperator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "isAdd",
				"type": "bool"
			}
		],
		"name": "OperatorAdded",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
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
		"inputs": [],
		"name": "adminWithdrawAddr",
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
		"inputs": [],
		"name": "avaliableSize",
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
		"name": "decimals",
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
		"name": "getOperators",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "maxDeposit",
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
		"name": "maxDepositPercentage",
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
		"name": "minDeposit",
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
		"name": "minGas",
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
		"name": "operators",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "poolSize",
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
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recordMap",
		"outputs": [
			{
				"name": "deposit",
				"type": "uint256"
			},
			{
				"name": "result",
				"type": "uint256"
			},
			{
				"name": "divisor",
				"type": "uint256"
			},
			{
				"name": "remainder",
				"type": "uint256"
			},
			{
				"name": "blockNum",
				"type": "uint256"
			},
			{
				"name": "finish",
				"type": "bool"
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
		"name": "recordNum",
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
		"name": "stdGasPercentage",
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
		"name": "systemSuspend",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "systemTermination",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalNum",
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

const avaliableSizeDisplay = document.getElementById('avaliableSizeDisplay');

const resultDisplay = document.getElementById('resultDisplay');

function updateResultDisplay(result) {
    resultDisplay.textContent = result;
}
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
            document.getElementById('call-contract-avaliableSize-button').addEventListener('click', async () => {
                try {
                    // 调用不需要用户的view方法
                    const result = await contract.methods.avaliableSize().call();
                    console.log('avaliableSize方法返回值：', result);
                    avaliableSizeDisplay.textContent = result;
                } catch (error) {
                    console.error('调用合约方法时出错：', error);
                }
            });

            // 按钮点击事件：调用合约中的abc方法
            document.getElementById('call-contract-miner-button').addEventListener('click', async () => {
                try {
                    // 调用需要参数，需要pay的方法
                    const value = '5';
                    const divisor = 3;
                    const remainder = 1;
                    contract.methods.mining(divisor, remainder).send({ from: currentAccount, value: web3.utils.toWei(value, 'ether')})
                    .on('transactionHash', function(hash) {
                        console.log('transactionHash', hash);
                    })
                    .on('receipt', function(receipt){
                        updateResultDisplay('等待封装 ，请点击按钮');
                        console.log('receipt', receipt);
                        console.log('events', receipt.events);

                        // 获取并显示事件，需要知道事件名称
                        var events = receipt.events.M;
                        if (Array.isArray(events) === false) {
                            events = [events];
                        }
                        events.forEach(function(event) {
                            // 此处可根据用户地址进行过滤
                            const rv = event.returnValues;
                            console.log('detail', rv);
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

            // 按钮点击事件：调用合约中的abc方法
            document.getElementById('call-contract-seal-button').addEventListener('click', async () => {
                try {
                    // 调用需要参数，需要pay的方法
                    contract.methods.seal().send({ from: currentAccount})
                    .on('transactionHash', function(hash) {
                        console.log('transactionHash', hash);
                    })
                    .on('receipt', function(receipt){
                        console.log('receipt', receipt);
                        console.log('events', receipt.events);

                        // 获取并显示事件，需要知道事件名称
                        var events = receipt.events.M;
                        if (Array.isArray(events) === false) {
                            events = [events];
                        }
                        events.forEach(function(event) {
                            // 此处可根据用户地址进行过滤
                            const rv = event.returnValues;
                            console.log('detail', rv);
                            if (rv.addr === currentAccount) {
                                updateResultDisplay(rv.amount);
                            }
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
