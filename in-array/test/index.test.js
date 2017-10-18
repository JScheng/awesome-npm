var assert = require('assert');
var inArray = require('../index');

describe('inArray', function () {
    it('应该返回true当数组中存在该元素的时候', function () {
        assert(inArray(['a', 'b', 'c', 'c'], 'a'));
    });
    it('应该返回false当数组中不存在该元素的时候', function () {
        assert(!inArray(['a', 'b', 'c', 'c'], 'd'));
    });
    it('应该返回false当数组中不存在该元素的时候', function () {
        assert(!inArray([], 'd'));
    });
    it('应该返回false当数组中不存在该元素的时候', function () {
        assert(!inArray(null), 'd');
    });
});