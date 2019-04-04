function findFirstRepeatChar(s) {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            return s[i];
        } else {
            set.add(s[i]);
        }
    }
}

function call() {
    console.log(findFirstRepeatChar('abcdefg'));
}

module.exports = call;