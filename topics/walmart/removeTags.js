function removeTag (s) {
    let r = '';
    for (let i = 0 ; i < s.length; i++) {
        if (s[i] === '<') {
            while (s[i] !== '>') {
                i++;
            }
        } else {
            r += s[i];
        }
    }
    return r;
}

function call() {
   console.log(removeTag('<tag>A</tag>B<div>C</div>'));
}

module.exports = call;