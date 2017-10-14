module.exports = function newArray(start, end) {
    var n0 = typeof start === 'number',
        n1 = typeof end === 'number';
    if (n0 && !n1) {
        end = start;
        start = 0;
    } else if (!n0 && !n1) {
        start = 0;
        end = 0;
    }
    start = start | 0;
    end = end | 0;
    var len = end - start;
    if (len < 0) {
        throw new Error('array length must be positive');
    }
    var result = new Array(len);
    for (var i = 0, begin = start; i < len; i++ , begin++) {
        result[i] = begin;
    }
    return result;
}