var test = require('tape')
var id = require('../index')

test('id', function (t) {
    t.equal(id(3), 3)
    t.end()
})