function clone(obj) {
    let temp;
    if (obj instanceof Array) {
        temp = [];
        for (const x of obj) {
            const r = clone(x);
            temp.push(r);
        }
        return temp;
    } else if (obj instanceof Object) {
        temp = {};
        for (const x in obj) {
            temp[x] = clone(obj[x]);
        }
        return obj;
    }
    return obj;
}

module.exports = clone;