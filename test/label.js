var assert = require('assert');
var burrito = require('burrito');

exports.callLabel = function () {
    var times = 0;
    var src = burrito('foo(10)', function (node) {
        if (node.name === 'call') {
            assert.equal(node.label, 'foo');
            times ++;
        }
    });
    
    assert.equal(times, 1);
};

exports.varLabel = function () {
    var times = 0;
    var src = burrito('var x = 2', function (node) {
        if (node.name === 'var') {
            assert.equal(node.label, 'x');
            times ++;
        }
    });
    
    assert.equal(times, 1);
};
