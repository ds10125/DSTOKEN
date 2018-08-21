pragma solidity ^0.4.2;

contract DSToken{
  //constructor
  //Set the total amount of token
  //Read the total amount of token
  uint256 public totalSupply; //unsigned integer
  function DSToken() public{
    totalSupply = 100000000; //Every time when this variable is modified,
                             //will write to the block chain
  }
}
