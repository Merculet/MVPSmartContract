var MerculetToken = artifacts.require("./MerculetToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MerculetToken);
};
