var spiralOrder = function(matrix) {
    if (!matrix || matrix.length  === 0 || !matrix[0] || matrix[0].length === 0) {
        return [];
    }
    const result = [];
    let start = 0;
    let end = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (start <= end && left <= right) {
        for (let i = left; i <= right; i++ ) {
            result.push(matrix[start][i]);
        }
        start++;
        for (let i = start; i <= end; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (start <= end) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[end][i]);
            }
            end--;
        }
        if (left <= right) {
            for (let i = end; i >= start; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
};

module.exports = spiralOrder;