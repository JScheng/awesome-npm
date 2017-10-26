var clean = require('to-no-case');

module.exports = function toSpaceCase(string) {
    return clean(string).replace(/[\W_]+(.|$)/g, (matches, match) => {
        return match ? ' ' + match : '';
    }).trim();
};