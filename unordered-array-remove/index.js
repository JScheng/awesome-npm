module.exports = function removeArray(arr, i) {
    if (i >= arr.length || i < 0) {
        return;
    }
    var last = arr.pop();
    if (i < arr.length) {
        var temp = arr[i];
        arr[i] = last;
        return temp;
    }
    return last;
};