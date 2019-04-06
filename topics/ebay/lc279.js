var numSquares = function(n) {
    // perfect < n
    // dp[i] contains the least number of perfect square number which sum to i
    // dp[i] = Math.max(dp[i], dp[j] + 1); j is squareNumber && i - j is SquareNumber
    const dp = new Array(n + 1);
    dp.fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        
        }
    }
    return dp[n];
};

function call () {
    console.log(numSquares(12));
}

module.exports = call;