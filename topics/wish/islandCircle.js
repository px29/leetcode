function inbound(grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

function calculateCircle(grid, visited, i, j, temp) {
    if (!inbound(grid, i, j) || grid[i][j] === '0' || visited[i][j]) {
        return;
    }
    temp[0] += 4;
    temp[0] -= (i > 0 && grid[i - 1][j] === '1' ? 2 : 0);
    temp[0] -= (j > 0 && grid[i][j - 1] === '1' ? 2 : 0);
    visited[i][j] = true;
    calculateCircle (grid, visited, i + 1, j, temp);
    calculateCircle (grid, visited, i - 1, j, temp);
    calculateCircle (grid, visited, i, j + 1, temp);
    calculateCircle (grid, visited, i, j - 1, temp);
}


var numIslands = function(grid) {
    const visited = [];
    for (let i = 0; i < grid.length; i++) {
        const t = new Array(grid[0].length).fill(false);
        visited.push(t);
    }
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                let temp = [0]; 
                calculateCircle(grid, visited, i, j, temp);
                max = Math.max(max, temp);
            }
        }
    }
    return max;
};

function call() {
    console.log(numIslands([["1","1","0","0","0"],["1","1","0","1","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
}

module.exports = call;