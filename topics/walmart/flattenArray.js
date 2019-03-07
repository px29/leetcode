function flattenArray(arr) {
    let r = [];
    for (const x of arr) {
        if (x instanceof Array) {
            const t = flattenArray(x);
            r = r.concat(t);
        } else {
            r.push(x);
        }
    }
    return r;
}
module.exports = flattenArray;