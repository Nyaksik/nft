import { ethers } from "hardhat";
import arrayURI from "../tokenURI/ArrayTokenURI";

async function main() {
  const [signer] = await ethers.getSigners();
  const instance = await ethers.getContractAt(
    "NFTContract",
    process.env.CONTRACT_ADDRESS as string,
    signer
  );

  for (const item of arrayURI) {
    await instance.mint(signer.address, item);
  }

  console.log("Array is minted ");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
