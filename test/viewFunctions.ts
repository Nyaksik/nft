import { expect } from "chai";

export default (): void => {
  it('Name is "Top Streamer"', async function (): Promise<void> {
    const name = await this.instance.name();

    expect(name).to.eq("Top Streamer");
  });
  it('Symbol is "TSTR"', async function (): Promise<void> {
    const symbol = await this.instance.symbol();

    expect(symbol).to.eq("TSTR");
  });
  it('Base url is "TSTR"', async function (): Promise<void> {
    const baseURI = await this.instance.getBaseURI();

    expect(baseURI).to.eq(this.baseURL);
  });
};
