var maxSubarraySumCircular = function(A) {
    // 我的想法是double A 的长度， 然后从index 找到index + N
    // 对于[i, i + A.length] 这一段找max sum
    const x = [...A, ...A];
    let max = A[0];
    for (let i = 0; i < A.length; i++) {
        const dp = new Array(A.length);
        dp[0] = A[i];
        for (let j = i + 1; j < i + A.length; j++) {
            dp[j - i] = (dp[j - 1 - i] < 0 ? 0 : dp[j - 1 - i]) + x[j];
            max = Math.max(dp[j - i], max);
        }
    }
    return max;
};

function call () {
    console.log(maxSubarraySumCircular([1,-2,3,-2]));
}

module.exports = call;