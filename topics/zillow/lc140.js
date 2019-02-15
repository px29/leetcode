var wordBreak = function(s, wordDict) {
    const dp = [];
    for (let i = 0; i <= s.length; i++) {
        dp.push([]);
    }
    dp[0] = [''];
    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            const sub = s.substring(j, i);
            if (dp[j].length > 0 && wordDict.includes(sub)) {
                for (const t of dp[j]) {
                    dp[i].push(`${t} ${sub}`.trim());
                }
            }
        }
    }
    return dp[s.length];
};

module.exports = wordBreak;
