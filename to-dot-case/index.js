var space = require('to-space-case');

module.exports = function toDotCase(string) {
    return space(string).replace(/\s/g, '.');
};