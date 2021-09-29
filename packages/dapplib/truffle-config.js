require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food warm device noble plastic coral light army gaze'; 
let testAccounts = [
"0x45bd6e3956a7d764405d9875f6ae956e3b76946078d98f37ee97c85416f0f0b6",
"0x7115736b23bd1d0c0136e40edf174c08d20271770e75da1d94413f43363218d4",
"0x435d77280ad09fb506e7e0873499430d979ba734c8c46efc3f1960f3fd8ea936",
"0xfea07dccc75bf3fe698597f9c8a50949127f3da0f37566ed92fc63ce58fd4bb3",
"0x8249ad5c4d06fee70f469bed19cd46cf7c9eaab8b310d6a83e6e2cb3d28e79b1",
"0x6f4f9562c47e46700ca0db0b0d9a36612208d28eed53e47c1be5f308a3edb191",
"0x49ab8d742d9353f5b7054f8048d5ee45a570e347cfa48ad97256bd825b258751",
"0x186527d59abcd8a80d317eeaefeca5cb78cdc95e9167b6428e8d510d82c15ed8",
"0xa15a077c6d0cce643b01885a0756949899a60caa4352e662423f46fd2c1e56b5",
"0x98e026cb9bbda72de2b31af8fbda19009d0ff0cc90ea28c5d47b13152285a6e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

