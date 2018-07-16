/*
testrpc 测试用例：

不包含gas消耗，gas消耗测试用例在testnet网络中体现

1. 默认创建10个Ethereum account
2. 创建一个总量为2100万名字为“HomToken”, 代号为"HOT"的代币的智能合约，默认存储在创建者（accounts[0]）账户里
3. 给账户account[1] 授权1000万个代币管理权限, 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token
5. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额

*/

// Specifically request an abstraction for MetaCoin
var HomToken = artifacts.require("HomToken");

var toWei = function(value){
  return value * Math.pow(10, 18)
}
var fromWei = function(value){
  return value * Math.pow(10, -18) 
}

contract('HomToken', function(accounts) {


  

  var meta;
  var no = 0;
  var account_one = accounts[0];
  var account_two = accounts[1];
  var account_three = accounts[2];

  var account_builder = accounts[0]


  var tokenParams = {
    _initialAmount: 21000000,
    _decimalUnits: 18,
    _tokenName: "HomToken",
    _tokenSymbol: "HOT"
  };

  var total = tokenParams._initialAmount
  var approve = 5000, approveWei = toWei(approve);
  var price = 100, priceWei = toWei(price);
  
  var gasPrice = 1000;


  console.log("1.默认创建10个Ethereum account")
  for(var i=0;i<accounts.length;i++){
    console.log("accounts["+i+"]: " + accounts[i])
  }
  
  console.log("2.创建一个总量为2100万名字为“HomToken”, 代号为\"HOT\"的代币的智能合约，默认存储在创建者（accounts[0]）账户里")
  
  return HomToken.new(...Object.values(tokenParams), { from: account_builder }).then(function(instance) {
    meta = instance;
    return instance.balanceOf.call(account_builder);
  }).then(function(balance){
    balance = fromWei(balance)
    assert.equal(balance.valueOf(), total, "初始账户金额不等于" +total+ "，发行量有误！");
    console.log("3.给账户account[1] 授权1000万个代币管理权限, 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token")
    return meta.approve(account_two, approveWei, {from: account_builder});
  })
  .then(function(){
    return meta.transferFrom(account_one, account_three, priceWei, {from: account_two})
  })
  .then(function(){
    return meta.balanceOf.call(account_one);
  })
  .then(function(balance){
    console.log("account_one: " + balance.valueOf())
    return meta.balanceOf.call(account_two);
  })
  .then(function(balance){
    console.log("account_two: " + balance.valueOf())
    return meta.balanceOf.call(account_three);
  })
  .then(function(balance){
    console.log("account_three: " + balance.valueOf())

    console.log("4. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额")
    return meta.transferFrom(account_one, accounts[3], priceWei, {from: account_two});
  })
  .then(function(){
    return meta.transferFrom(account_one, accounts[4], priceWei, {from: account_two});
  })
  .then(function(){
    return meta.transferFrom(account_one, accounts[5], priceWei, {from: account_two});
  })
  .then(function(){
    return meta.transferFrom(account_one, accounts[6], priceWei, {from: account_two});
  })
  .then(function(){
    return meta.transferFrom(account_one, accounts[7], priceWei, {from: account_two});
  })
  .then(function(){
    return meta.transferFrom(account_one, accounts[8], priceWei, {from: account_two});
  })
  .then(function() {
    return meta.balanceOf.call(accounts[0])
  })
  .then(function(balance){
    console.log("accounts[0] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), (total - (price*7)), "account[0]金额不等于"+(total - (price*7))+"，有误！");
    return meta.balanceOf.call(accounts[1])
  })
  .then(function(balance){
    console.log("accounts[1] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), 0, "account[1]金额不等于0，有误！");
    return meta.balanceOf.call(accounts[2])
  })
  .then(function(balance){
    console.log("accounts[2] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[2]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[3])
  })
  .then(function(balance){
    console.log("accounts[3] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[3]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[4])
  })
  .then(function(balance){
    console.log("accounts[4] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[4]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[5])
  })
  .then(function(balance){
    console.log("accounts[5] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[5]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[6])
  })
  .then(function(balance){
    console.log("accounts[6] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[6]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[7])
  })
  .then(function(balance){
    console.log("accounts[7] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[7]金额不等于"+price+"，有误！");
    return meta.balanceOf.call(accounts[8])
  })
  .then(function(balance){
    console.log("accounts[8] balance: " + balance.valueOf())
    //assert.equal(fromWei(balance.valueOf()), price, "account[8]金额不等于"+price+"，有误！");
  })
  





});
