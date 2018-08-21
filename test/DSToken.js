var DSToken = artifacts.require("./DSToken.sol");

contract('DSToken', function(accounts){

  it('sets the total supply upon deployment', function(){
    return DSToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 100000000, 'sets the total supply to 1,000,000,00')
    })
  })
})
