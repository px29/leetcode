function inbound(grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

const Dx = [0, 1, -1, 0];
const Dy = [1, 0, 0, -1];

function bfs (grid, i, j) {
    const queue = [];
    queue.push([i, j]);
    grid[i][j] = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        for (let i = 0; i < 4; i++) {
            let x = node[0] + Dx[i];
            let y = node[1] + Dy[i];
            if (inbound(grid, x, y) && grid[x][y] === 1) {
                grid[x][y] = 0;
                queue.push([x, y]);
            }
        }
    }
} 

var numIslands = function(grid) {
    let island = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                island++;
                bfs(grid, i, j);   
            }
        }
    }
    return island;
};

function call() {
    console.log(numIslands([[1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0]]));
}

module.exports = call;