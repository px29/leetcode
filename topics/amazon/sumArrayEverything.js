function sumArrayAnything(array) {
    let result = 0;
    for (const a of array) {
        if (a instanceof Array) {
            const r = sumArrayAnything(a);
            result += r;
        } else if (typeof a === 'number'){
            result += a;
        }
    }
    return result;
}
module.exports = sumArrayAnything;