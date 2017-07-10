var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.txpool', function() {
    describe('methods', function() {
        u.methodExists(web3.txpool, 'content');
        u.methodExists(web3.txpool, 'inspect');
        u.methodExists(web3.txpool, 'status');
    });
});
