let should = require('should');
let getArrayLast = require('../index');

describe('测试函数getArrayLast', function () {
    it('参数未传入数组应该报错', function () {
        (function () {
            getArrayLast();
        }).should.throw('the first argument should be a array');
    });
    it('未指定返回个数，返回函数第一个参数', function () {
        getArrayLast(['a']).should.eql('a');
        getArrayLast(['a', 'b']).should.eql('b');
        getArrayLast(['a', 'b', 'c']).should.eql('c');
        should(getArrayLast([])).be.exactly(null);
    });
    it('指定返回个数，返回指定个数', function () {
        getArrayLast(['a', 'b', 'c'], 2).should.eql(['b', 'c']);
        getArrayLast(['a', 'b', 'c', 'd', 'e'], 3).should.eql(['c', 'd', 'e']);
        getArrayLast(['a', 'b', 'c'], 3).should.eql(['a', 'b', 'c']);
    });
});