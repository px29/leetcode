function helper(n, result, temp) {
    if (n === 0) {
        result.push(temp.slice(0));
        return;
    }
    for (let i = 1; i <= 6; i++) {
        temp.push(i);
        helper(n - 1, result, temp);
        temp.pop();
    }
}

function generateDicesCombination(n) {
    const result = [];
    helper(n, result, []);
    return result;
}

module.exports = generateDicesCombination;