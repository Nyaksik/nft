import { expect } from "chai";

export default (): void => {
  it("Initial balance is zero", async function (): Promise<void> {
    const balance = await this.instance.balanceOf(this.owner.address);

    expect(balance).to.eq(0);
  });
  it("Balance after mint is equal to one ", async function (): Promise<void> {
    await this.instance.mint(this.owner.address, this.testCID);

    const balance = await this.instance.balanceOf(this.owner.address);

    expect(balance).to.eq(1);
  });
  it("Balance after mint is equal to one ", async function (): Promise<void> {
    await expect(
      this.instance
        .connect(this.addr1)
        .mint(this.owner.address, this.testCID)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
};
