require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SrUqGmDd80oauULHfHmVN8lIu-hEiQQL",
      accounts: ["9eddd8a8e52ddb9eaf67dfb16df085d0037e8ddcf3831ddffb36bd745c022c04"]
    }
  }
}