var HomToken = artifacts.require("HomToken");


contract('HomToken', (accounts) => {

  it("1.默认创建10个Ethereum account", function(){
    for(var i=0;i<accounts.length;i++){
      console.log("accounts["+i+"]: " + accounts[i])
    }
  })



  var total = 21000000;
  var approve = 10000000;
  var price = 100;
  var gasPrice = 1000;

  var no = 0;
  var account_one = accounts[0];
  var account_two = accounts[1];
  var account_three = accounts[2];

  let instance;

  var tokenParams = {
    _initialAmount: total,
    _decimalUnits: 18,
    _tokenName: "HomToken",
    _tokenSymbol: "HOT"
  };
  
  HomToken.new(...Object.values(tokenParams), { from: account_one }).then(function(instance){
    instance = instance;
    return instance.balanceOf.call(account_one, {from: account_one});
  }).then(function(balance){
    console.log(balance)
  })


})