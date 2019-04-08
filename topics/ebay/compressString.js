function compressString(str) {
    const map = new Map();
    for (const s of str) {
        if (map.has(s)) {
            map.set(s, map.get(s) + 1);
        } else {
            map.set(s, 1);
        }
    }
    let r = '';
    [...map.entries()].sort((a, b) => {
        a[0].charCodeAt(0) - b[0].charCodeAt(0)
    }).forEach((e) => {
        r += `${e[0]}${e[1]}`;
    });
    return r;
}

function call () {
    console.log(compressString("aaaabbbcc"));
}

module.exports = call;