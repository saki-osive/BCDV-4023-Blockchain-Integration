require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_API_KEY, MNEMONIC } = require("./secrets");

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {},
        ropsten: {
            url: `https://eth-ropsten.alchemyapi.io/v2/w7w5DxUqIXHMhGes43aWg4csB4y-EXO3`,
            accounts: { mnemonic: '' },
        },
    },
};
