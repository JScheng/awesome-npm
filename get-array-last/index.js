let isNumber = require('is-number');

module.exports = function getArrayLast(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error('the first argument should be a array');
    }

    let len = arr.length;
    if (len === 0) {
        return null;
    }

    num = isNumber(num) ? +num : 1;
    if (num === 1) {
        return arr[len - 1];
    }

    let last = arr.slice(len - num);

    return last;
}