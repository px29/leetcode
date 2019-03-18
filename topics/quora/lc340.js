var lengthOfLongestSubstringKDistinct = function(s, k) {
    // we need to find a way for the disticts statistic
    // slide window 
    if (!s || k === 0) {
        return 0;
    }
    let map = new Map(); // s[i] and its last index
    let start = 0;
    let end = 0;
    let r = 0;
    while (end <= s.length) {
        if (map.size === k && !map.has(s[end]) || end === s.length) {
            r = Math.max(r, end - start);
            while (map.size === k) {
                const count = map.get(s[start]);
                if (count - 1 === 0) {
                    map.delete(s[start]);
                } else {
                    map.set(s[start], count - 1);
                }
                start++;
            }
        } 
        if (map.has(s[end])) {
            map.set(s[end], map.get(s[end]) + 1);
        } else {
            map.set(s[end], 1);
        }
        end++;
    }
    return r;  
    
};

function call() {
    console.log(lengthOfLongestSubstringKDistinct('aaaa', 2));
}

module.exports = call;