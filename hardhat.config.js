/**
 * @type import('hardhat/config').HardhatUserConfig

 */

 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 
 module.exports = {
   solidity: "0.8.7",
   networks: {
     matic: {
       url: process.env.MAINNET_RPC,
       accounts: [process.env.PRIVATE_KEY]
     }
   },
   etherscan: {
     apiKey: process.env.POLYGONSCAN_API_KEY
   }
 };