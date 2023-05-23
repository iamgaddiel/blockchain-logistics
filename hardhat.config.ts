require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.19",
  networks: {
    development: {
      url: "http://127.0.0.1:8545",
    },
  },
};
