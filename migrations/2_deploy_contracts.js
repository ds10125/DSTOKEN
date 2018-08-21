var DSToken = artifacts.require("./DSToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DSToken);
};
