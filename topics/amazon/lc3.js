var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let start = 0;
    let end = 0;
    let result = 0;
    while (end < s.length) {
        while (start <= end && set.has(s[end])) {
            result = Math.max(result, end - start);
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        end++;
    }
    return Math.max(result, set.size);
};

module.exports = lengthOfLongestSubstring;