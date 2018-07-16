module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
        testrpc: {
          host: "localhost",
          port: 8545,
          network_id: "100"
        },
        testnet: {
          host: "localhost",
          port: 8545,
          network_id: "3",
          gas: 4000000, 
          gasPrice: 20000000000,
          from: "0x240b25e2c1fbaef6f4669f855b2e46a96da271d4"
        }
    }
};


// testnet

// gas limit 7,000,000
// gas price 20,000,000,000




// gas: Gas limit used for deploys. Default is 4712388.
// gasPrice: Gas price used for deploys. Default is 100000000000 (100 Shannon).
// from: From address used during migrations. Defaults to the first available account provided by your Ethereum client.
// provider: Default web3 provider using host and port options: new Web3.providers.HttpProvider("http://<host>:<port>")

// https://etherscan.io/tx/0x7c65c5a13167d544ea4583241701317efb7a8d7a9516c2cc85308bcba38a5bdf
// Gas Limit: 1,160,233 
// Gas Used By Txn: 1,160,233
// gasPrice: 20,000,000,000   20Gwei
// Actual Tx Cost/Fee: 23,204,660,000,000,000


// networks: {
//   development: {
//     host: "127.0.0.1",
//     port: 8545,
//     network_id: "*" // match any network
//   },
//   live: {
//     host: "178.25.19.88", // Random IP for example purposes (do not use)
//     port: 80,
//     network_id: 1,        // Ethereum public network
//     // optional config values:
//     // gas
//     // gasPrice
//     // from - default address to use for any transaction Truffle makes during migrations
//     // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
//     //          - if specified, host and port are ignored.
//   }
// }