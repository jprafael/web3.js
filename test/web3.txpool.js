var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index');
var web3 = new Web3();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var tests = {
    status: [
        {
            result: {
                pending: 0,
                queued: 0
            },
            formattedResult: {
                pending: 0,
                queued: 0
            },
            call: 'txpool_status'
        }
    ],
    content: [
        {
            result: {
                pending: {},
                queued: {}
            },
            formattedResult: {
                pending: {},
                queued: {}
            },
            call: 'txpool_content'
        }
    ],
    inspect: [
        {
            result: {
                pending: {},
                queued: {}
            },
            formattedResult: {
                pending: {},
                queued: {}
            },
            call: 'txpool_inspect'
        }
    ]
};

describe('web3.net', function () {
    Object.keys(tests).forEach(function (method) {
        describe(method, function () {
            tests[method].forEach(function (test, index) {
                it('property test: ' + index, function () {
                    
                    // given
                    var provider = new FakeHttpProvider();
                    web3.setProvider(provider);
                    provider.injectResult(test.result);
                    provider.injectValidation(function (payload) {
                        assert.equal(payload.jsonrpc, '2.0');
                        assert.equal(payload.method, test.call);
                        assert.deepEqual(payload.params, []);
                    });

                    // when 
                    var result = web3.txpool[method];

                    // then
                    assert.deepEqual(test.formattedResult, result);
                });
            });
        });
    })
});

