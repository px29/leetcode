var multiply = function(num1, num2) {
    // very large
    const num = new Array(num1.length + num2.length);
    num.fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const a = i + j + 1;
            const b = i + j;
            const temp = parseInt(num1[i]) * parseInt(num2[j]) + num[a];
            num[a] = temp % 10;
            num[b] += parseInt(temp / 10);
        }
    }
    let result = num.join('');
    let i = 0
    for (; i < num.length; i++) {
        if (num[i] !== 0) {
            break;
        }
    }
    return result.substring(i);
};

module.exports = multiply;