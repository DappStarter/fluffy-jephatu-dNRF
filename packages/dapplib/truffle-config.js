require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid glove flower smooth name release noise artist gesture photo equal gauge'; 
let testAccounts = [
"0x1c1679af92319bbbebc45dc35d979220db9707ecb5f183447c18bd72c318b55d",
"0x537f1574827be882f7bb2dfd3911e691d81a8cd6047e90e76e8e0a99f65f76cd",
"0xf27d911f310492770dadf79546c7e37dfa3996ba2636e18effc307e3c8235ebb",
"0x1b081d66381137d36645e38dd421e615956363c0d74d6750f5aac3406839e390",
"0x5a2c06d89fb211539a365a5314bf28fed4fb7e170e257b7b79bc36b1c0cbb29c",
"0x7408d4a83250fe91532e5a3e6e25bdc62bc5c1346593fa582687a71307efc596",
"0x5427122eb4685acc972efa61c4864c3bd7623fa9b1c1886db37211cda74e52cd",
"0x784b9eda0a2565000b45c32f414f768bf5f0281e598c92ea7f8dc432ab10a61a",
"0x7418968f9cadc6dc19789a1c840a7910575b6898d3826402c1b6f53c2eb7f59a",
"0x28cbc8c72902a6d9befa39e098f8415f9793b78046552070d69691e0fdb7ea8a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


