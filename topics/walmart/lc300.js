var lengthOfLIS = function(nums) {
    // dp
    // 问题缩小为，dp[i] 这一段的最长增序列的长度是多少
    // dp[i] = if (nums[i] > nums[j]) {dp[i] = Math.max(dp[j] + 1, dp[i])}
    const dp = new Array(nums.length);
    dp.fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[nums.length];
};

module.exports = lengthOfLIS;