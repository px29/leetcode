function breakPositiveInteger(n) {
    const t = n.toString().split('');
    const r = t.reduce((prev, cur) => {
        return prev += parseInt(cur);
    }, 0);
    if (r > 9) {
        return breakPositiveInteger(r);
    } else {
        return r;
    }
}

function call () {
    console.log(breakPositiveInteger(999));
}

module.exports = call;