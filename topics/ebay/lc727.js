var minWindow = function(S, T) {
    // DP
    // 分析 因为有两个string，这样二维dp 的概率很高。
    // 我要知道的是长度，那么dp 可以存长度，或者存起始点的index。
    // 怎么决定dp的element 应该存什么呢。问题规模是如何缩小的。
    // 那么dp[i][j]表示的是，在S.substring（0，i+ 1）这一段中，能够表示T.substring(0, j + 1)的最大的index。同时j 要小于等于i，否则S表示不了T
    // 那么我们如何得知dp 的递推公式呢，可以找一些简单的例子，用来发现规律。
    // 例如 S： ‘a’ T : "a"这个时候dp[1][1] = 0; dp[0][0] = -1; dp[0][1] = -1;
    // T长度有可能大于S
    // http://www.cnblogs.com/grandyang/p/8684817.html
    
    const dp = new Array(S.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(T.length + 1).fill(-1);
    }
    for (let i = 0; i < S.length + 1; i++) {
        dp[i][0] = i;
    }
    console.log(dp);
    let start = -1;
    let l = S.length;
    for (let i = 1; i < S.length + 1; i++) {
        for (let j = 1; j <= Math.min(i, T.length); j++) {
            if (S[i - 1] === T[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
        if (dp[i][T.length] !== -1) { // 
            const length = i - dp[i][T.length];
            if (length < l) {
                start = dp[i][T.length];
                l = length;
            }
        }
    }
    console.log(dp);
    return start !== -1 ? S.substring(start, start + l) : "";
};
function call() {
    console.log(minWindow("abcdebdde", 'bde'));
}

module.exports = call;