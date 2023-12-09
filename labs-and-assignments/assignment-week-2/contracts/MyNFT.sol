// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint() external onlyOwner {
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}