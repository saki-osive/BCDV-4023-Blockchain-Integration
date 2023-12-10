// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // Get contract deployer's wallet address
  const [owner] = await ethers.getSigners();
  console.log("deploying")
  // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts.
    // MyNFT is a factory for instances of our NFT contract. When using the hardhat-ethers
    // plugin, ContractFactory and Contract instances are connected to the first signer by default.
 
    const contractFactory = await ethers.getContractFactory('MyToken');
 
    // Deploy contract with the constructor argument baseTokenURI
    // Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract.
    // This is the object that has a method for each of the smart contract functions.
 
    const contract = await contractFactory.deploy(owner.address);
 
    // await contract.deployed();
 
    console.log('Contract deployed to address:', contract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
