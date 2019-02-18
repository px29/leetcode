var grayCode = function(n) {
    // 找到的规律就是，下一位的节点总是和上一位一样，或者不一样，也就是末尾+1 或者末尾+ 0 的结果。
    // 我们每次添加的部分，都是上一部分的倒序，然后高位 + 1；
    const result = [0];
    let count = 0;
    while (count <= n) {
        for (let i = Math.floor(result.length / 2); i >= 0; i--) {
            console.log(1 << count);
            console.log(0 | 1);
            const value = (result[i] | (1 << count));
            console.log(value);
            result.push(value);
        }
        count++;
    }
    return result; 
};

module.exports = grayCode;