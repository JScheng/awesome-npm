require('mocha');
var assert = require('assert');
var isNumber = require('../index');

var shouldPass = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,

    1,
    1.1,
    10,
    10.10,
    100,
    -100,

    '0.1',
    '-0.1',
    '-1.1',
    '0',
    '012',
    '0xff',
    '1',
    '1.1',
    '10',
    '10.10',
    '100',
    '5e3',
    '   56\r\n  ', // issue#3

    Math.LN2,
    Number(1),
    new Number(1),

    // 012, Octal literal not allowed in strict mode
    parseInt('012'),
    parseFloat('012'),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(1),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,

    '0.0',
    '0x0',
    '0e+5',
    '000',
    '0.0e-5',
    '0.0E5',

    +'',
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +Boolean(true),
    +false,
    +Math.LN2,
    +String(100),
    +true,
    +null,
    +Number(1),
    +new Array(''),
    +new Array(0),
    +new Boolean(true),
    +new Buffer(''),
    +new Date,
    +new Date(),
    +new Number(1),
];

var shouldFail = [
    '   ', // issue#3
    '\r\n\t', // issue#3
    '',
    '3a',
    'abc',
    'false',
    'null',
    'true',
    'undefined',
    +'abc',
    +/foo/,
    +[1, 2, 4],
    +function () { },
    +function () { },
    +function () { },
    +Infinity,
    +Math.sin,
    +NaN,
    +new Array('abc'),
    +new Array(2),
    +new RegExp('foo'),
    +new String("abc"),
    +String('foo'),
    +undefined,
    +{ a: 1 },
    +{},
    // Symbol('foo'),
    // Symbol(),
    // Symbol.iterator,
    /foo/,
    [1, 2, 3],
    [1],
    [],
    Boolean(true),
    false,
    function () { },
    function () { },
    function () { },
    Infinity,
    Math.sin,
    NaN,
    new Array(''),
    new Array('abc'),
    new Array(0),
    new Boolean(true),
    new Buffer(''),
    new Buffer('abc'),
    new Date(),
    new RegExp('foo'),
    new String("abc"),
    null,
    String("abc"),
    true,
    undefined,
    { a: 1 },
    { abc: 'abc' },
    {},
];

describe('is a number', function () {
    shouldPass.forEach(function (num) {
        it('"' + JSON.stringify(num) + '" should be a number', function () {
            assert.equal(isNumber(num), true);
        });
    });
});

describe('is not a number', function () {
    shouldFail.forEach(function (num) {
        it('"' + JSON.stringify(num) + '" should not be a number', function () {
            assert.equal(isNumber(num), false);
        });
    });
});