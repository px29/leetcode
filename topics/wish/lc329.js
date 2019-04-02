function inbound(matrix, x, y) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
}

function helper (matrix, i, j, visited) {
    if (!inbound(matrix, i, j)) {
        return 0;
    }
    visited[i][j] = true;
    let cur = 1;
    const top = helper (matrix, i + 1, j, visited);
    const left = helper(matrix, i, j - 1, visited);
    const right = helper(matrix, i, j + 1, visited);
    const down = helper(matrix, i - 1, j, visited);
    return cur + Math.max(top, Math.max(right, Math.max(left, down)));
}


var longestIncreasingPath = function(matrix) {
    let length = 0;
    const visited = new Array();
    for (let i = 0; i < matrix.length; i++) {
        visited.push(new Array(matrix[0].length).fill(false));
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
      
            length = Math.max(length, helper(matrix, i, j ,visited));
        }
    }
    return length;
};

function call() {
    console.log(longestIncreasingPath([
        [9,9,4],
        [6,6,8],
        [2,1,1]
      ] ));
}

module.exports = call;