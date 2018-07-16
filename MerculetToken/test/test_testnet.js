// var HomToken = artifacts.require("HomToken");

// var accounts = [
//     "0xafba301f9aaff553fe4f21d63dc0e3f09a708aa6",
//     "0x240b25e2c1fbaef6f4669f855b2e46a96da271d4",
//     "0xfc9a92255ac0dcad4ba4e2fae7ca57f2f1c9f6fb"
// ]


// var meta;
// HomToken.deployed().then(function(instance) {
//   meta = instance
//   return meta.balanceOf.call(accounts[0]);
// }).then(function(balance) {
//   console.log("coinbase balance: " + balance.valueOf());
//   assert.equal(balance.valueOf(), 21000000, "发行总额不等于21000000");
//   return meta.transfer.call(accounts[1], 100);
// }).then(function(success){
//   console.log(success)
//   return meta.balanceOf.call(accounts[0]);
// }).then(function(balance){
//   console.log("coinbase balance: " + balance.valueOf())
//   assert.equal(balance.valueOf(), 21000000 - 100, "accounts[0] 余额应该为" + (21000000-100));
//   return meta.balanceOf.call(accounts[1]);
// }).then(function(balance){
//   console.log("account[1] balance: " + balance.valueOf())
//   assert.equal(balance.valueOf(), 100, "accounts[1] 余额应该为" + 100);
// })


/*

测试用例：

1. 默认创建10个Ethereum account
2. 创建一个总量为2100万名字为“HomToken”, 代号为"HOT"的代币的智能合约，默认存储在创建者（accounts[0]）账户里
3. 给账户account[1] 授权1000万个代币管理权限, 并给account[1]转账100代币以保证有余额进行后面交易。
4. 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token
5. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额



*/

// Specifically request an abstraction for MetaCoin


/*
testrpc 测试用例：

不包含gas消耗，gas消耗测试用例在testnet网络中体现

1. 默认创建10个Ethereum account
2. 创建一个总量为2100万名字为“HomToken”, 代号为"HOT"的代币的智能合约，默认存储在创建者（accounts[0]）账户里
3. 给账户account[1] 授权1000万个代币管理权限, 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token
5. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额

*/
var HomToken = artifacts.require("HomToken");

var accounts = ["0xafba301f9aaff553fe4f21d63dc0e3f09a708aa6", "0x240b25e2c1fbaef6f4669f855b2e46a96da271d4", "0xfc9a92255ac0dcad4ba4e2fae7ca57f2f1c9f6fb", "0x36d24fe76e1f76208de560a10c9c95a7d8cba9cf", "0x029e1ec9772241b32d2f6ba5768f14a0fbfab70d", "0xb55b05208189d3e2c80f939a9e6eff4ff493d035", "0xe57b2ebfc5f96e079f53159daf5f2e9ded8c5e88", "0xc8f15b0a4aa85ad94dade76caedcc7b74a80a780", "0x5e855264bc58337c756a7eec951fc46bf7917295", "0x01f13102dc9877cd20f27b5e8d4423d0b940e327"]

var account_one = accounts[0], account_two = accounts[1]

var total = 21000000;
var approvePrice = 10000000;
var price = 100;
var gasPrice = 1000;

it("1. 默认创建10个Ethereum account", function(){
  for(var i=0; i <accounts.length; i++) {
    console.log(accounts[i])
  }
})


it("2. 创建一个总量为2100万名字为\“HomToken\”, 代号为\"HOT\"的代币的智能合约，默认存储在创建者（accounts[0]）账户里", function(){
  HomToken.deployed({gas: 4000000, gasPrice: 20000000000, from: account_two}).then(function(instance){
    meta = instance;
    return meta.balanceOf(account_two);
  })
  .then(function(balance){
    console.log("supply total balance (account_two):" + balance.valueOf())
    return meta.transfer(account_one, price, {from: account_two});
  })
  .then(function(){
    
  })
  // .then(function(result){
  //   return meta.transfer(accounts[3], price, {from: account_two});
  // })
  // .then(function(result){
  //   return meta.transfer(accounts[4], price, {from: account_two});
  // })
  // .then(function(result){
  //   return meta.transfer(accounts[5], price, {from: account_two});
  // })
  // .then(function(result){
  //   return meta.transfer(accounts[6], price, {from: account_two});
  // })
  // .then(function(result){
  //   return meta.transfer(accounts[7], price, {from: account_two});
  // })
  // .then(function(result){
  //   return meta.transfer(accounts[8], price, {from: account_two});
  // })
  .then(function(result){
    return meta.balanceOf.call(accounts[0]);
  })
  .then(function(balance){
    console.log("accounts[0] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[1]);
  })
  .then(function(balance){
    console.log("accounts[1] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[2]);
  })
  .then(function(balance){
    console.log("accounts[2] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[3]);
  })
  .then(function(balance){
    console.log("accounts[3] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[4]);
  })
  .then(function(balance){
    console.log("accounts[4] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[5]);
  })
  .then(function(balance){
    console.log("accounts[5] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[6]);
  })
  .then(function(balance){
    console.log("accounts[6] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[7]);
  })
  .then(function(balance){
    console.log("accounts[7] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[8]);
  })
  .then(function(balance){
    console.log("accounts[8] HOT balance:" + balance.valueOf());
    return meta.balanceOf.call(accounts[9]);
  })
  .then(function(balance){
    console.log("accounts[9] HOT balance:" + balance.valueOf());
  })
})





// contract('HomToken', function(accounts) {

//   it("1.默认创建10个Ethereum account", function(){
//     for(var i=0;i<accounts.length;i++){
//       console.log("accounts["+i+"]: " + accounts[i])
//     }
//   })

//   var total = 21000000;
//   var approve = 10000000;
//   var price = 100;
//   var gasPrice = 1000;

//   var meta;
//   var no = 0;
//   var account_one = accounts[0];
//   var account_two = accounts[1];
//   var account_three = accounts[2];

//   it("2.创建一个总量为2100万名字为“HomToken”, 代号为\"HOT\"的代币的智能合约，默认存储在创建者（accounts[0]）账户里", function() {
//     return HomToken.deployed().then(function(instance) {
//       return instance.balanceOf.call(accounts[0]);
//     }).then(function(balance){
//       assert.equal(balance.valueOf(), total, "初始账户金额不等于" +total+ "，发行量有误！");
//     })
//   });


//   it("3.给账户account[1] 授权1000万个代币管理权限, 利用account[1]权限从accounts[0]给accounts[2] 转账 100 Token", function(){

//     return HomToken.deployed().then(function(instance) {
//       meta = instance
//       return meta.balanceOf.call(account_one);
//     })
//     .then(function(balance){
//       console.log("account_one: " + balance.valueOf())
//       return meta.approve(account_two, approve, {from: account_one});
//     })
//     .then(function(){
//       return meta.transfer(account_two, price, {from: account_one});
//     })
//     .then(function(){
//       return meta.balanceOf.call(account_two);
//     })
//     .then(function(balance){
//       console.log("accounts_two balance:" + balance.valueOf());
//       return meta.transferFrom(account_one, account_three, price, {from: account_two})
//     })
//     .then(function(){
//       return meta.balanceOf.call(account_two);
//     })
//     .then(function(balance){
//       console.log("account_two: " + balance.valueOf());
//       return meta.balanceOf.call(account_three);
//     })
//     .then(function(balance){
//       console.log("account_three: " + balance.valueOf());
//     })
//   })

//   it("4. 账户accounts[1] 给 account[3]-account[8] 分别转账100 Token, 使用accounts[1]权限, 并且最终打印出所有账户代余额", function(){
//     return HomToken.deployed().then(function(instance) {
//       meta = instance
//       return meta.transferFrom(account_one, accounts[3], price, {from: account_two});
//     })
//     .then(function(){
//       return meta.transferFrom(account_one, accounts[4], price, {from: account_two});
//     })
//     .then(function(){
//       return meta.transferFrom(account_one, accounts[5], price, {from: account_two});
//     })
//     .then(function(){
//       return meta.transferFrom(account_one, accounts[6], price, {from: account_two});
//     })
//     .then(function(){
//       return meta.transferFrom(account_one, accounts[7], price, {from: account_two});
//     })
//     .then(function(){
//       return meta.transferFrom(account_one, accounts[8], price, {from: account_two});
//     })
//     .then(function() {
//       return meta.balanceOf.call(accounts[0])
//     })
//     .then(function(balance){
//       console.log("accounts[0] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), (total - (price*7)), "account[0]金额不等于"+(total - (price*7))+"，有误！");
//       return meta.balanceOf.call(accounts[1])
//     })
//     .then(function(balance){
//       console.log("accounts[1] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), 0, "account[1]金额不等于0，有误！");
//       return meta.balanceOf.call(accounts[2])
//     })
//     .then(function(balance){
//       console.log("accounts[2] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[2]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[3])
//     })
//     .then(function(balance){
//       console.log("accounts[3] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[3]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[4])
//     })
//     .then(function(balance){
//       console.log("accounts[4] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[4]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[5])
//     })
//     .then(function(balance){
//       console.log("accounts[5] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[5]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[6])
//     })
//     .then(function(balance){
//       console.log("accounts[6] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[6]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[7])
//     })
//     .then(function(balance){
//       console.log("accounts[7] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[7]金额不等于"+price+"，有误！");
//       return meta.balanceOf.call(accounts[8])
//     })
//     .then(function(balance){
//       console.log("accounts[8] balance: " + balance.valueOf())
//       assert.equal(balance.valueOf(), price, "account[8]金额不等于"+price+"，有误！");
//     })
//   })



// });
