function deepClone(obj) {
    let result = {};
    for (const k in obj) {
        if (typeof obj[k] === 'object') {
            const r = deepClone(obj[k]);
            result[k] = r;
        } else {
            result[k] = obj[k];
        }
    }
    return result;
}

module.exports = deepClone;