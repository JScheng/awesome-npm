var expect = require('chai').expect;

var dedupe = require('../index');

describe('dedupe', () => {
    it('数组中没有重复项', () => {
        var a = [1, 2, 3, 4, 5];
        var b = dedupe(a);
        expect(b).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('数组中有重复的数字', () => {
        var a = [1, 2, 2, 3, 4, 4, 5, 3, 4, 5];
        var b = dedupe(a);
        expect(b).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('数组中有重复的复杂数据类型', () => {
        var aa = [{ a: 2 }, { a: 2 }, { b: 1 }, { b: 1 }, { c: 1 }];
        var bb = dedupe(aa);
        expect(bb).to.deep.equal([{ a: 2 }, { b: 1 }, { c: 1 }]);
    });
    it('数组中有重复的复杂数据类型,传入比较方式', () => {
        var a = [{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { a: 3, b: 4 }];
        var b = dedupe(a, value => value.a);
        expect(b).to.deep.equal([{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }]);
    });
});