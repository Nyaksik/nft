//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

string constant BASE_URL = "https://ipfs.io/ipfs/";
string constant NAME = "Top Streamer";
string constant SYMBOL = "TSTR";

contract NFTContract is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    constructor() ERC721(NAME, SYMBOL) {}

    function _baseURI() internal pure override returns (string memory) {
        return BASE_URL;
    }

    function getBaseURI() external pure returns (string memory) {
        return _baseURI();
    }

    function mint(address _account, string memory _tokenURI)
        external
        onlyOwner
        returns (uint256)
    {
        _tokenIds++;
        _mint(_account, _tokenIds);
        _setTokenURI(_tokenIds, _tokenURI);
        return _tokenIds;
    }
}
