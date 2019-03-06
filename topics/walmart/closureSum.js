function sum(x) {
    let t = x;
    if (arguments.length > 1) {
        t = [...arguments].reduce((a, b) => a + b);
    }
    return (y) => {
        return t + y;
    }
}

module.exports = sum;