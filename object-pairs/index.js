'use strict';

module.exports = function (obj) {
    return Object.keys(obj).map(key => {
        return [key, obj[key]];
    });
};