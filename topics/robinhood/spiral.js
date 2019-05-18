function spiral (n) {
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }
    let start = 0;
    let end = n - 1;
    let left = 0;
    let right = n - 1;
    let count = 1;
    while (start <= end && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[start][i] = count++;
        }
        start++;
        for (let i = start; i <= end; i++) {
            matrix[i][right] = count++;
        }
        right--;
        if (start <= end) {
            for (let i = right; i >= left; i--) {
                matrix[end][i] = count++;
            }
            end--;
        }
        if (left <= right) {
            for (let i = end; i >= start; i--) {
                matrix[i][left] = count++;
            }
            left++;
        }
    }
    return matrix;
}

function call () {
    console.log(spiral(2));
}

module.exports = call;