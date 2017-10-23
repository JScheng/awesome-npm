var space = require('to-space-case');

module.exports = function toCamelCase(string) {
    return space(string).replace(/\s(\w)/g, function (matches, letter) {
        return letter.toUpperCase();
    });
};