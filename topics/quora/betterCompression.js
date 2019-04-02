function compression(str) {
    if (!str) {
        return str;
    }
    const map = new Map();
    let char = '';
    let n = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            n = n * 10 + parseInt(str[i]);
        } else {
            if (char && map.has(char)) {
                map.set(char, map.get(char) + n);
            } else if (char) {
                map.set(char, n);
            }
            char = str[i];
            n = 0;
        }
    }
    let r = '';
    console.log([...map.entries()].sort((a, b) => a[1] - b[1]));
    return r;
}

function call() {
    console.log(compression('a12b56c1'));
}

module.exports = call;