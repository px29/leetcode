var largestOverlap = function(A, B) {
    let n = A.length;
    let max = 0;
    for (let i = -n + 1; i < n; i++) {
        for (let j = -n + 1; j < n; j++) {
            let t = 0;
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    if (x + i >= 0 && x + i < n && y + j >= 0 && y + j < n && A[x][y] === B[x + i][y + j]) {
                        t++;
                    }
                }
            }
            max = Math.max(max, t);
        }
    }
    return max;
};

function call() {
    console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]]
        ,[[0,0,0],[0,1,1],[0,0,1]]));
}

module.exports = call;