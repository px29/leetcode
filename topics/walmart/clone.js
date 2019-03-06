function clone(obj) {
    let r;
    if (obj instanceof Array) {
        r = [];
        for (const e of obj) {
            r.push(clone(e));
        }
    } else if (obj instanceof Object) {
        r = {};
        for (const k in obj) {
            r[k] = clone(obj[k]);
        }
    } else {
        r = obj;
    }
    return r;
}

module.exports = clone;