/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const DX = [0, 1, -1, 0];
const DY = [1, 0, 0, -1];

let inBoard = function(board, i, j) {
    return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
}

let dfs = function (board, i, j, visited, word, index) {
    if (index === word.length) {
        return true;
    }
    if (board[i][j] === word.charAt(index)) {
        let result = false;
         visited[i][j] = true;
        for (let k = 0; k < 4; k++) {
            const x = DX[k] + i;
            const y = DY[k] + j;
            if (inBoard(board, i, j)) {
                const temp = dfs(board, x, y, visited, word, index + 1);
            }
        }
        visited[x][y] = false;
        return result;
    } else {
        return false;
    }
};

var exist = function(board, word) {
    const visited = [];
    for (let i = 0; i< board.length; i++) {
        const row = new Array(board[0].length);
        row.fill(false);
        visited.push(row);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const result = dfs(board, i, j, visited, word, 0);
            if (result) {
                return true;
            }
        }
    }  
    return false;
};

module.exports.exist = exist;