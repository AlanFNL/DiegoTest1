
const hre = require("hardhat");

async function main() {

  const Nftes = await hre.ethers.getContractFactory("Nftes");
  const nftes = await Nftes.deploy();
  await nftes.deployed();

  console.log("deployed to:", nftes.address);

  const Monsters = await hre.ethers.getContractFactory("Monsters");
  const monsters = await Monsters.deploy();
  await monsters.deployed();

  console.log("deployed to:", monsters.address);

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
