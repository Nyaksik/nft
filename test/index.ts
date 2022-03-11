import { artifacts, ethers, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import mint from "./mint";
import viewFunctions from "./viewFunctions";

describe("Contract testing", async function () {
  before(async function () {
    this.baseURL = "https://ipfs.io/ipfs/";
    this.zeroAddress = "0x0000000000000000000000000000000000000000";
    this.testCID = "QmUzhF6ZLHC65FwDStyCjYyo5cLPpvRfd2gFZa4ptLGeQt";
    [this.owner, this.addr1] = await ethers.getSigners();
  });
  beforeEach(async function () {
    const artifact: Artifact = await artifacts.readArtifact("NFTContract");
    this.instance = await waffle.deployContract(this.owner, artifact);
  });
  viewFunctions();
  mint();
});
