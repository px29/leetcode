function backtracking(str, result, temp, index) {
    if (temp.length > 0) {
        result.push(temp);
    }
    for (let i = index; i < str.length; i++) {
        backtracking(str, result, temp + str[i], i + 1);
    }
}

function subsequence1(string) {
    const str = string.trim().split('');
    const result = [];
    str.sort();
    backtracking(str, result, '', 0);
    return result;
}

function subsequence(string) {
    const str = string.trim().split('');
    const result = [];
    str.sort();
}
for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
        
    }
}
module.exports = subsequence;
