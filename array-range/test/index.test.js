var expect = require('chai').expect;

var range = require('../index');

describe('range', () => {
    it('基本用法1', () => {
        var arr = range(5);
        expect(arr).to.deep.equal([0, 1, 2, 3, 4]);
    });
    it('基本用法2', () => {
        var arr = range(1);
        expect(arr).to.deep.equal([0]);
    });
    it('基本用法3', () => {
        var arr = range(0);
        expect(arr).to.deep.equal([]);
    });
    it('基本用法4', () => {
        var arr = range(9);
        expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it('基本用法5', () => {
        var arr = range(1, 4);
        expect(arr).to.deep.equal([1, 2, 3]);
    });
    it('es6中使用1', () => {
        var arr = range(5).map(x => x * x);
        expect(arr).to.deep.equal([0, 1, 4, 9, 16]);
    });
    it('es6中使用2', () => {
        var arr = range(2, 10).filter(x => x % 2 === 0);
        expect(arr).to.deep.equal([2, 4, 6, 8]);
    });
});
