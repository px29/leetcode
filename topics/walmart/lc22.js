function backtracking (result, temp, left, right) {
    if (left === 0 && right === 0) {
        result.push(temp);
        return;
    }
    if (right > left) {
        backtracking(result, temp + ')', left, right - 1);
    }
    if (left > 0) { // 这里卡了一下
        backtracking(result, temp + '(', left - 1, right);
    }
}

function generateParentheses(n) {
    const result = [];
    backtracking(result, '', n, n);
    return result;
}

module.exports = generateParentheses;