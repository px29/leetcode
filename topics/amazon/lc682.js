var calPoints = function(ops) {
    const stack = [];
    let sum = 0;
    for (let i = 0; i < ops.length; i++) {
       if (ops[i] === '+') {
            const a = stack[stack.length - 1];
            const b = stack[stack.length - 2];
            stack.push(a + b);
            sum += (a + b);
        } else if (ops[i] === 'D') {
            const a = stack[stack.length - 1];
            const r = a * 2;
            stack.push(r);
            sum += r;
        } else if (ops[i] === 'C') {
            const x = stack.pop();
            sum -= x;
        } else {
            const x = parseInt(ops[i]);
            stack.push(x);
            sum += x;
        }
    }
    
    return sum;
};

module.exports = calPoints;