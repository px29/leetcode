function largestCommonSubstring(a, b) {
    const dp = new Array(a.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(b.length + 1).fill(0);
    }
    let max = 0;
    let r = '';
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
                r = a.substring(i - max, i);
            }
        }
    }
    console.log(max);
    return r;
}

function call () {
    console.log(largestCommonSubstring('zxabcdezy', 'yzabcdezx'));
}
module.exports = call;
