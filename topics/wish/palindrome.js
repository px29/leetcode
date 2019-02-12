function helper (string, count, left, right) {
    while (left >= 0 && right < string.length && string[left--] === string[right++]) {
        count = count + 1;
    }
    return count;
}

function palindromeCounter (s) {
    let count = 0;
    if (!s) {
        return count; 
    }

    for (let i = 0; i < s.length; i++) {
        let temp = helper(s, 0, i, i);
        temp = helper(s, temp, i, i + 1);
        count += temp;
    }
    return count;
}

module.exports = palindromeCounter;