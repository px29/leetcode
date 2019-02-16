var lenLongestFibSubseq = function(A) {
    const dp = new Array();
    const map = new Map();
    for (let i = 0; i < A.length; i++) {
        const sb = new Array(A.length);
        map.set(A[i], i);
        sb.fill(2);
        dp.push(sb);
    }
    
    
    for (let i = 2; i < A.length; i++) {
        for (let j = i - 1; j >= 0 ; j--) {
            const prev = A[i] - A[j];
            if (prev >= A[i]) {
                break;
            }
            if (!map.has(prev)) {
                continue;
            }
            dp[i][j] = dp[j][map.get(prev)] + 1;
        }
    }
    
    let result = 0;
    for (let j = 2; j < A.length; j++) {
        for (let i = 1; i < A.length - 1; i++) {
            if (dp[i][j] > 2) {
                result = Math.max(result, dp[i][j]);
            }
        }
    }
    return result;
};

module.exports = lenLongestFibSubseq;