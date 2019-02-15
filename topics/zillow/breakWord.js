var wordBreak = function(s, wordDict) {
    // dfs
    if (s.length === 0) {
        return true;
    }
    let result = false;
    for (let i = 1; i <= s.length; i++) {
        const sub = s.substring(0, i);
        if (sub.length > 0 && wordDict.includes(sub)) {
            const temp = wordBreak(s.substring(i), wordDict);
            result |= temp;
        }
    }
    return result;
};

module.exports = wordBreak;