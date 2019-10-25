var candyCrush = function(board) {
   
    for (let j = 0; j < board[0].length; j++) {
        let k = board.length - 1;
        let i = board.length - 1;
        for (i; i >= 0; i--) {
            if (board[i][j] === board[k][j]) {
                board[k][j] += board[i][j];  
            } else {
                board[--k][j] = board[i][j];
            }
        }
        while (i >= 0) {
            board[i][j] = 0;
        }
    }
    console.log(board);
};

function call () {
    console.log(candyCrush([[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]));
}

module.exports = call;