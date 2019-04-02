
function cal (n) {
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
}
function ranking (n) {
    // dp[i][j] 是i 个奖，j个人，j > i > 1 
    // j === i， 全排列, 就意味着没有人在同一个名词
    // 
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(n + 1).fill(0));
    }
    let r = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) { // j > i > 1
            if (i === 1) {
                dp[i][j] = 1;
            } else if (i === j) {
                dp[i][j] = cal(i);
            } else {
                dp[i][j] = i * dp[i][j - 1] + i * dp[i - 1][j - 1];
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        r += dp[i][n]; // 从没有人同一个名词，到所有人都一个名次
        
    }
    return r;

}

function call(){
    console.log(ranking(5));
}

module.exports = call;