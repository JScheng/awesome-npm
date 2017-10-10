let should = require('should');
let getArrayFirst = require('../index');

describe('测试函数getArrayFirst', function () {
    it('参数未传入数组应该报错', function () {
        (function () {
            getArrayFirst();
        }).should.throw('the first argument should be a array');
    });
    it('未指定返回个数，返回函数第一个参数', function () {
        getArrayFirst(['a']).should.eql('a');
        getArrayFirst(['a', 'b']).should.eql('a');
        getArrayFirst(['a', 'b', 'c']).should.eql('a');
        should(getArrayFirst([])).be.exactly(null);
    });
    it('指定返回个数，返回指定个数', function () {
        getArrayFirst(['a', 'b', 'c'], 2).should.eql(['a', 'b']);
        getArrayFirst(['a', 'b', 'c'], 3).should.eql(['a', 'b', 'c']);
    });
});