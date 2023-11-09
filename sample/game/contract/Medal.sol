pragma solidity ^0.4.19;

import "./ERC721Full.sol";

contract Medal is ERC721Full {
  string[] public colors;
  mapping(string => bool) _colorExists;

  function Medal() ERC721Full("Color", "COLOR") public {
  }

  // E.G. color = "#FFFFFF"
  function mint(string memory _color) public {
    require(!_colorExists[_color]);
    uint _id = colors.push(_color);
    _mint(msg.sender, _id);
    _colorExists[_color] = true;
  }

}