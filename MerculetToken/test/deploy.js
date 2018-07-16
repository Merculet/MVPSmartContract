/*
testrpc 测试用例：

不包含gas消耗，gas消耗测试用例在testnet网络中体现

1. 默认创建10个Ethereum account
2. 创建一个总量为2100万名字为“HomToken”, 代号为"HOT"的代币的智能合约，默认存储在创建者（accounts[0]）账户里
3. 给账户account[1] 授权1000万个代币管理权限, 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token
5. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额

*/

// Specifically request an abstraction for MetaCoin
var MerculetToken = artifacts.require("MerculetToken");

var toWei = function(value){
  return value * Math.pow(10, 18)
}
var fromWei = function(value){
  return value * Math.pow(10, -18) 
}

contract('MerculetToken', function(accounts) {

  var meta;
  
  var account_builder = accounts[1]


  var tokenParams = {
    _initialAmount: 21000000,
    _decimalUnits: 18,
    _tokenName: "Chief Growth Officer",
    _tokenSymbol: "CGO"
  };

  return MerculetToken.new(...Object.values(tokenParams), { from: account_builder }).then(function(instance) {
    meta = instance;
    return instance.balanceOf.call(account_builder);
  }).then(function(balance){
    balance = fromWei(balance)
    console.log("amount:" + balance)
  })

});
