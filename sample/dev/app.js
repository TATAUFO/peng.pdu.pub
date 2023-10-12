import contractABI from './contract-abi.js';

window.addEventListener('load', async () => {
    // 检查是否存在 MetaMask
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        try {
            // 请求用户授权
            await window.ethereum.enable();

            // 创建合约实例
            const contractAddress = '0xfd924719744a1c26e891b745C60B25282DD139E8'; // 合约地址
            
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
                    const result = await contract.methods.myNum().call({from: currentAccount});
                    console.log('myNum方法返回值：', result);


                    const result2 = await contract.methods.getCoinBase().call();
                    console.log('getCoinBase方法返回值：', result2);
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
