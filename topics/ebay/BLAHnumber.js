function findBLAHnumber(n) {
    let i = 1;
    while (n > 0) {
        if (i % 5 === 0 || i % 11 === 0 || i % 7 === 0) {
            n--;
            if (n === 0) {
                return i;
            }
        }
        i++;
    }
    return -1;
}

function uglyNumber(n) {
    const dp = new Array(n);
    dp[0] = 1;
    let a = 0;
    let b = 0;
    let c = 0;
    let count = 1;
    while (count < n) {
        dp[count] = Math.min(dp[a] * 2, Math.min(dp[b] * 3, dp[c] * 5));
        if (dp[count] === dp[a] * 2) {
            a++;
        }
        if (dp[count] === dp[b] * 3 ) {
            b++;
        }
        if (dp[count] === dp[c] * 5) {
            c++;
        }
        count++;
        console.log(count, a, b, c);
    }
    return dp[n - 1];
}

function call () {
    console.log(uglyNumber(10));
}

module.exports = call;