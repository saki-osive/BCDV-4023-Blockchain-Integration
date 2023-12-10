require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/pZQWJPFs8KYDN1mhSU9DUSn-A6p5ofzX",
      accounts: ["0x172805eb61ae6d83989310a6662f0992c292e0bcfdbec2eb7a4c98a6034166bb"],
    },
  },
};
