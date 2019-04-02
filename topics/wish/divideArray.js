function divideArray(a, b) {
    const r = [];
    let i = 0;
    for (i; i < a.length && i < b.length; i++) {
        const temp = (a[i] + b[i]).toString();
        for (let j = 0; j < temp.length; j++) {
            r.push(parseInt(temp[j]));
        }
    }
    while (i < a.length) {
        r.push(a[i++]);
    }
    while (i < b.length) {
        r.push(b[i++]);
    }
    return r;
}

function call() {
    console.log(divideArray([1,1,1], [1,3,9999]));
}
module.exports = call;