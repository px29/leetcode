const set = new Set();
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return true;
    }
    if (set.has(s)) {
        return true;
    }
    for (let i = 1; i <= s.length; i++) {
        const sub = s.substring(0, i);
        if (wordDict.includes(sub)) {
            set.add(sub);
            const temp = wordBreak(s.substring(i), wordDict);
            if (temp) {
                return true;
            }
        }
    }
    return false;
};
module.exports = wordBreak;
