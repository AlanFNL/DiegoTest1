// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC1155, Ownable {
    mapping (uint256 => string) private _uris;
    mapping (address => uint) public whitelistedAddresses;

    string public name;
    string public symbol;

    constructor() ERC1155("") {
    name = "PruebaNFTRef";
    symbol = "P1155";
  }

    function uri(uint256 tokenId) override public view returns (string memory) {
        return(_uris[tokenId]);
    }

    function setTokenUri(uint256 _tokenId, string memory _uri) public onlyOwner {
        _uris[_tokenId] = _uri;
    }

    function mint(address recipient, uint256 tokenId, uint256 amount) public onlyOwner {
        _mint(recipient, tokenId, amount, "");
    }

    function updateWhitelist(address _addr, uint _amount) public onlyOwner {
        whitelistedAddresses[_addr] = _amount;
    }

    function whitelistMint(address recipient, uint256 tokenId, uint256 amount) public {
        require(amount >= 1, "wrong amount");
        require(whitelistedAddresses[msg.sender] >= amount, "not whitelisted");

        _mint(recipient, tokenId, amount, "");
        whitelistedAddresses[msg.sender] -= amount;
    }
   
} 
