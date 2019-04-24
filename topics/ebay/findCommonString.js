function findCommonString(a, b) {
    const dp = new Array(a.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(b.length + 1).fill(0);
    }
    let max = 0;
    let sub = '';
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > max) {
                    max = dp[i][j];
                    sub = a.substring(i - max, i);
                }
            }
        }
    }
    return sub;
}

function call () {
    console.log(findCommonString('aaaaaaaabbbcccccddddd', 'ggggggggabhhhhhhh'));
}

module.exports = call;