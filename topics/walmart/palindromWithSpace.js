function pa (s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        while (s[start] === " ") {
            start++;
        }
        while (s[end] === " ") {
            end--;
        }
        if (s[start++].toLowerCase() !== s[end--].toLowerCase()) {
            return false;
        }
    }
    return true;
}

module.exports = pa;