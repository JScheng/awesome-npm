module.exports = function (arr, compareFn) {
    if (!Array.isArray(arr)) {
        throw new Error('the first argument should be a array');
    }
    var clone = [], obj = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        strItem = typeof compareFn === 'function' ? JSON.stringify(compareFn(item)) : JSON.stringify(item);
        if (!obj[strItem]) {
            clone.push(item);
            obj[strItem] = true;
        }
    }
    return clone;
}