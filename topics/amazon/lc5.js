function isPalindrom(s, start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return s.substring(start + 1, end );
}

var longestPalindrome = function(s) {
    let result = '';

    if (s.length < 2) {
        return s;
    }
    
    for (let i = 0; i < s.length - 1; i++) {
        const odd = isPalindrom(s, i, i);
        result = result.length < odd.length ? odd : result;
        const even = isPalindrom(s, i, i + 1);
        result = result.length < even.length ? even : result;
    }
    return result;
};

module.exports = longestPalindrome;