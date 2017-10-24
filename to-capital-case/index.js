var space = require('to-space-case');

module.exports = function toCapitalCase(string) {
    return space(string).replace(/(^|\s)(\w)/g, (matches, previous, letter) => {
        return previous + letter.toUpperCase();
    });
};