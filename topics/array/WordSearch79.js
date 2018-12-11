
const DX = [0, 1, -1, 0]
const DY = [1, 0, 0, -1]

var inBoard = function(board, i, j) {
    return i >= 0 && i < board.length && j >= 0 && j < board[0].length
}
var dfs = function(board, visit, i, j, word, index) {
    if (index === word.length) {
        return true
    }
    let result = false
    if (board[i][j] === word[index]) {
        visit[i][j] = true
        for (let k = 0; k < 4; k++) {
            const x = i + DX[k]
            const y = j + DY[k]
            console.log(x, y)
            if (inBoard(board, x, y) && board[x][y] === word[index + 1]) {
                result = result || dfs(board, visit, x, y, word, index + 1)
            }
        }
        visit[i][j] = false
    }
    return result
}

var exist = function(board, word) {
    let visit = []
    for (let i = 0; i < board.length; i++) {
        let row = new Array(board[0].length)
        row.fill(false)
        visit.push(row)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const result = dfs(board, visit, i, j, word, 0)
            if (result) {
                return true
            }
        }
    }
    return false
}

module.exports.exist = exist;
