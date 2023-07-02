 // SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

 // dont 
contract PayMintCoin is ERC721, ReentrancyGuard, Ownable {
  using Counters for Counters.Counter;

// save as property of contract
  address public crossmintAddress;

  constructor(string memory customBaseURI_) // this function for contract name which shows on nfts 
    ERC721("Crown Pay-Mint Coin ", "CMC")
  {
    customBaseURI = customBaseURI_;
  }

  /** MINTING **/

  uint256 public constant MAX_SUPPLY =  11111;

  uint256 public constant MAX_MULTIMINT = 11;

  uint256 public MintPrice = 0.001 ether;
 


  Counters.Counter private supplyCounter;

  function CustomMint(uint256 count) public nonReentrant  payable  {
    require(totalSupply() + count - 1 < MAX_SUPPLY, "Exceeds max supply");
    require(count <= MAX_MULTIMINT, "Mint at most 100 at a time");
    require(msg.value >= MintPrice , "Insufficient Balance" );
    require(saleIsActive,"Sale is Not Active");
    for (uint256 i = 0; i < count; i++) {
      _mint(msg.sender, totalSupply());
      supplyCounter.increment();
    }
  }

  function totalSupply() public view returns (uint256) {
    return supplyCounter.current();
  }

  /** ACTIVATION **/

  bool public saleIsActive = true;

  function setSaleIsActive(bool saleIsActive_) external onlyOwner {
    saleIsActive = saleIsActive_;
  }

  /** URI HANDLING **/

  string private customBaseURI;

  mapping(uint256 => string) private tokenURIMap;

  function setTokenURI(uint256 tokenId, string memory tokenURI_)
    external
    onlyOwner
  {
    tokenURIMap[tokenId] = tokenURI_;
  }

  function setBaseURI(string memory customBaseURI_) external onlyOwner {
    customBaseURI = customBaseURI_;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return customBaseURI;
  }

  function tokenURI(uint256 tokenId) public view override
    returns (string memory)
  {
    string memory tokenURI_ = tokenURIMap[tokenId];

    if (bytes(tokenURI_).length > 0) {
      return tokenURI_;
    }

    return _baseURI();
  }

 

  function crossmint(address _to) public payable {
    require(totalSupply()  + 1  < MAX_SUPPLY, "No more left");
     require(msg.sender == crossmintAddress, 
      "This function is for Crossmint only."
    );

      _safeMint(_to, totalSupply() + 1);
      supplyCounter.increment();
  }
    
    function ChangeCustomMintPrice (uint256 _price) public {
        MintPrice = _price ;
    }

  // include a setting function so that you can change this later
  function setCrossmintAddress(address _crossmintAddress) public onlyOwner {
    crossmintAddress = _crossmintAddress;
  }

 function withdrawFunds() public payable onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }
   
}

 