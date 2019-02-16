function generateBoard(n, k) {
    const board = new Array(n);
    for (let i = 0; i < board.length; i++) {
        const sub = new Array(n);
        sub.fill(0);
        board[i] = sub;
    }
    insertMines(n, k, board);
    return board;
}

function inboard(x, y, board) {
    return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}

function insertMines(n, k, board) {
    while (k > 0) {
        const x = parseInt(Math.random() * n);
        const y = parseInt(Math.random() * n);
        if (inboard(x, y, board) && !board[x][y]) {
            board[x][y] = -1;
            generateNumInCell(board, x, y);
            k--;
        }
    }
}
const Dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const Dy = [-1, 0, 1, -1, 1, -1, 0, 1];
function generateNumInCell(board, x, y) {
    for (let i = 0; i < 8; i++) {
        const a = x + Dx[i];
        const b = y + Dy[i];
        if (inboard(a, b, board)) {
            board[a][b] = board[a][b] + 1;
        }
    }
}

function handleClick(x, y, board) {
    if (inboard(x, y, board)) {
        return board[x][y];
    }
}

module.exports = {
    generateBoard,
    handleClick,
};

// how to save a large board: use the string to save it. We can easily convert the 2D board to 1D
