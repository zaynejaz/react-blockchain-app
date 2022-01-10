require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uwBuErtgh-XDLcFithX-x_5EHhwAOfCq',
      accounts: ['84e8ca4a013524d5f325e9aa4e8d7a7951d73fb7557652afd228c178a28f8eca'],
    },
  },
};