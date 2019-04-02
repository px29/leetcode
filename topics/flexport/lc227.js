var calculate = function(s) {
    const stack = [];
    const reg = /[0-9]+/;
    let num = 0;
    let sign = '+'; // 前一个sign 是什么
    for (let i = 0; i <= s.length; i++) {
        if (i < s.length && reg.test(s[i])) {
            num = num * 10 + parseInt(s[i]);
        } else if (s[i] && s[i] !== " " && !reg.test(s[i]) || i === s.length) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                const r = stack.pop() * num;
                stack.push(r);
            } else {
                const r = parseInt(stack.pop() / num);
                stack.push(r);
            }
            sign = s[i];
            num = 0;
        }
    }
    return stack.reduce((prev, cur) => prev + cur);
};

function call () {
    console.log(calculate('3+2*2'));
}

module.exports = call;