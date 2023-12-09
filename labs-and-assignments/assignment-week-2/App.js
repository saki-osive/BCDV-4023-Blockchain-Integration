import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/nftMint.json';
import { ethers } from 'ethers';

// change the contract address after each deployment
const contractAddress = '0x9Ab9950e70709713aa89632A1A6eEC3075cEaE7B';
const abi = contract.abi;
// console.log(JSON.stringify(contract.abi));

function App() {
    const [message, setMessage] = useState('');
    const [currentAccount, setCurrentAccount] = useState(null);
    // const [walletAddress, setWalletAddress] = useState('');

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log('🦊 Install the Metamask browser extension.');
            return;
        } else {
            setMessage('✅ Wallet exists.');
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });
        // console.log(accounts);

        if (accounts.length !== 0) {
            const account = accounts[0];
            setMessage('1️⃣ Using first account in wallet as default.');
            setCurrentAccount(account);
        } else {
            setMessage('❗ No authorized account found.');
        }
    };

    const connectWalletHandler = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            setMessage('🦊 Install the Metamask browser extension.');
        }

        try {
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });

            setMessage('1️⃣ Using first account in wallet: ', accounts[0]);
            setCurrentAccount(accounts[0]);
            // setWalletAddress(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const mintNftHandler = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);

                setMessage('💰 ➡ Authorize payment to mint NFT.');
                let nftTxn = await nftContract.mintNFTs(1, {
                    value: ethers.utils.parseEther('0.001'),
                });

                setMessage('🔄 Validating...');
                await nftTxn.wait();

                setMessage(
                    `🔎 Etherscan: https://sepolia.etherscan.io/tx/${nftTxn.hash}`
                );
            } else {
                setMessage('❌ Ethereum object does not exist');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const connectWalletButton = () => {
        return (
            <div>
                <button
                    onClick={connectWalletHandler}
                    className='cta-button connect-wallet-button'>
                    Connect Wallet
                </button>
            </div>
        );
    };

    const mintNftButton = () => {
        return (
            <div>
                <h3 className='text-style'>🦊 Account Address: {currentAccount}</h3>
                <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
                    Mint NFT
                </button>
            </div>
        );
    };

    useEffect(() => {
        checkWalletIsConnected();
    }, []);
    return (
        <div className='card'>
            <div className='header'>
                <h3 className='text-color'>Sepolia Testnet 🔹 NFT Minter</h3>
            </div>
            <hr></hr>
            <div className='container'>
                {currentAccount ? mintNftButton() : connectWalletButton()}
            </div>
            <div>
                <hr></hr>
                <h4>{message}</h4>
            </div>
        </div>
    );
}

export default App;