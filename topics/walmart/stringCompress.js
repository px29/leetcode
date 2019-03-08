function stringCompress(s) {
    let r = '';
    let prev = '';
    let count = 0;
    for (let i = 0; i <= s.length; i++) {
        if (!prev) {
            prev = s[i];
            count = 1;
        } else if (s[i] === prev) {
            count++;
        } else {
            r += (prev + count);
            count = 1;
            prev = s[i];
        }
    }
    return r;
}

function call() {
    console.log(stringCompress('aabcccccaaa'));
}

module.exports = call;