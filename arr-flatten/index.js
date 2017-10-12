'use strict';

module.exports = function flatten (arr) {
    if (!Array.isArray(arr)) {
        throw new Error('the first argument should be a array');
    }
    return flat(arr, []);
}

function flat(arr, res) {
    var cur = null, len = arr.length;
    for (var i = 0; i < len; i++) {
        cur = arr[i];
        Array.isArray(cur) ? flat(cur, res) : res.push(cur);
    }
    return res;
}