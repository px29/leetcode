function helper(matrix, target, start, end) {
    if (start > end) {
        return false;
    }
    let mid = parseInt((start + end) / 2);
    if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
        const r = binarySearch(matrix[mid], target);
        if (r) {
            return true;
        }
    }
    return helper(matrix, target, start, mid - 1) || helper(matrix, target, mid + 1, end);     
}

function binarySearch (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    console.log(arr);
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
           end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
        return false;
    }
    return helper(matrix, target, 0, matrix.length - 1);
};

function call () {
    console.log(searchMatrix([
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ], 15));
}

module.exports = call;