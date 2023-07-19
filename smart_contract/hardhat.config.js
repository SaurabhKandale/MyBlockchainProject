require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/DrxLU0hN6eb0Kq6elxizS4cLyNYfn1xz',
      accounts: ['88f2a84db82dfb7da8fde9c0355f737b279cdc1f4d90da541a96423e4de9198c'],
    },
  },
};