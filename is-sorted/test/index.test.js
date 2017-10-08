let isSorted = require('../index');
let expect = require('chai').expect;

describe('检查数组是否排序函数', function () {
    it('[]返回true', function () {
        expect(isSorted([])).to.be.equal(true);
    });
    it('[1]返回true', function () {
        expect(isSorted([1])).to.be.equal(true);
    });
    it('[1, 2]返回true', function () {
        expect(isSorted([1, 2])).to.be.equal(true);
    });
    it('[8, 6]降序返回true', function () {
        expect(isSorted([8, 6], function (a, b) {
            return b - a;
        })).to.be.equal(true);
    });
    it('[1, 3, 5, 7]返回true', function () {
        expect(isSorted([1, 3, 5, 7])).to.be.equal(true);
    });
    it('[1, 3.5, 5.5, 7]返回true', function () {
        expect(isSorted([1, 3.5, 5.5, 7])).to.be.equal(true);
    });
    it('[1, 7, 8, 6]返回false', function () {
        expect(isSorted([1, 7, 8, 6])).to.be.equal(false);
    });
    it('[1, 7.5, 8.5, 6]返回false', function () {
        expect(isSorted([1, 7.5, 8.5, 6])).to.be.equal(false);
    });
});