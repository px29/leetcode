function deepEqual (a, b) {
    if (a === b) {
        return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (const k in a) {
            if (!b.hasOwnProperty(k)) {
                return false;
            }
            const t = deepEqual(a[k], b[k]);
            if (!t) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
module.exports = deepEqual;