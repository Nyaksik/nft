import { ethers } from "hardhat";

async function main() {
  const NFTContract = await ethers.getContractFactory("NFTContract");
  const nftContract = await NFTContract.deploy();

  await nftContract.deployed();

  console.log("NFTContract deployed to:", nftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
