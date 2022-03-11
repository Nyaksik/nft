import { task } from "hardhat/config";

task("mint", "Mint token")
  .addParam("address", "Address of the recipient")
  .addParam("uri", "Token URI")
  .setAction(
    async ({ address, uri }: { address: string; uri: string }, { ethers }) => {
      const [signer] = await ethers.getSigners();
      const instance = await ethers.getContractAt(
        "NFTContract",
        process.env.CONTRACT_ADDRESS as string,
        signer
      );

      const tokenId = await instance.mint(address, uri);

      console.log(`Token minted with id: ${tokenId}`);
    }
  );
