let isNumber = require('is-number');
let slice = require('array-slice');

module.exports = function getArrayFirst(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error('the first argument should be a array');
    }
    if (arr.length === 0) {
        return null;
    }
    let first = slice(arr, 0, isNumber(num) ? +num : 1);
    if (+num === 1 || num == null) {
        return first[0]
    }
    return first;
}