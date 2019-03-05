var lenLongestFibSubseq = function(A) {
    const map = new Map();
    const N = A.length;
    const dp = [];
    for (let i = 0; i < A.length; i++) {
        const x = new Array(N).fill(2);
        dp[i] = x;
    }
    let result = 0;
    for (let i = 0; i < N; i++) {
        map.set(A[i], i);
        for (let j = 0; j < i; j++) {
            if (A[i] - A[j] < A[j] && map.has(A[i] - A[j])) {
                dp[i][j] = Math.max(dp[i][j], dp[j][map.get(A[i] - A[j])] + 1);
            }
            result = Math.max(result, dp[i][j]);
        }
    }
    return result > 2 ? result : 0;
};

module.exports = lenLongestFibSubseq;
