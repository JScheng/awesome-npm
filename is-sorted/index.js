function defaultComparator(a, b) {
    return a - b;
}

module.exports = function checksorted(array, comparator) {
    comparator = comparator || defaultComparator;
    for (let i = 0; i < array.length; i++) {
        if (comparator(array[i], array[i + 1]) > 0) {
            return false;
        }
    }
    return true;
}