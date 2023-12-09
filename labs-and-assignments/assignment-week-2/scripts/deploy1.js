

const{ utils }=require('ethers');

async function main(){
const baseTokenURI =
    'https://amaranth-hidden-mastodon-476.mypinata.cloud/ipfs/Qmf7hpkmAFFvn3qSjTXrGxH2mraEmvge9TyGyMY6pn5fX7/';

// Get contract deployer's wallet address
    const[owner]=await hre.ethers.getSigners();

// A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts.
// MyNFT is a factory for instances of our NFT contract. When using the hardhat-ethers
// plugin, ContractFactory and Contract instances are connected to the first signer by default.

    const contractFactory =await ethers.getContractFactory('nftMint');

// Deploy contract with the constructor argument baseTokenURI
// Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract.
// This is the object that has a method for each of the smart contract functions.

    const contract =await contractFactory.deploy(baseTokenURI);

    await contract.deployed();

    console.log('Contract deployed to address:', contract.address);

// Get all token IDs of the owner
    let tokens =await contract.walletOfOwner(owner.address);
    console.log('Owner has tokens: ', tokens);
}
 
main()
    .then(()=> process.exit(0))
    .catch((error)=>{
console.error(error);
        process.exit(1);
    });

