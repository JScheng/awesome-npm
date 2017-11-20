'use strict';

module.exports = function isNumber(num) {
    var type = typeof num;
    if (type === 'string' || num instanceof String) {
        if (!num.trim()) {
            return false;
        }
    } else if (type !== 'number' && !(num instanceof Number)) {
        return false;
    }

    return (num - num + 1) >= 0;
};