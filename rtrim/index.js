'use strict';

module.exports = function (str, chars) {
    str = str.toString();
    if (!str) {
        return '';
    }
    if (!chars) {
        return str.replace(/\s+$/, '');
    }
    chars = chars.toString();
    var letters = str.split(''),
        i = letters.length - 1;

    for (i; i >= 0; i--) {
        if (chars.indexOf(letters[i]) === -1) {
            return str.substring(0, i + 1);
        }
    }

    return str;
};