function inbound(grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

const Dx = [1, 0, 0, -1];
const Dy = [0, 1, -1, 0];

function helper(grid, i, j) {
    for (let k = 0; k < 4; k++) {
        const x = i + Dx[k];
        const y = j + Dy[k];
        if (inbound(grid, x, y) && grid[x][y] === 1) {
            grid[x][y] = 0;
            helper(grid, x, y);
        }
    }
}

var numIslands = function(grid) {
    // dfs
    let island = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                helper(grid, i, j);
                island++;
            }
        }
    }
    return island;
};

module.exports = numIslands;
