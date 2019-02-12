function backtracking(str, result, temp, index) {
    if (temp.length > 0) {
        result.push(temp);
    }
    for (let i = index; i < str.length; i++) {
        backtracking(str, result, temp + str[i], i + 1);
    }
}

function subsequence(string) {
    const str = string.trim().split('');
    if (!str || str.length === 0) {
        return;
    }
    const result = [];
    str.sort();
    backtracking(str, result, '', 0);
    return result;
}

module.exports = subsequence;