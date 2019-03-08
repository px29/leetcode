function removeWhiteSpace (str) {
    let s = str.trim().split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            s.splice(i, 1, "%20");
        }
    }
    return s.join('');
}

function call () {
    console.log(removeWhiteSpace('Mr      John Smith    '));
  
}

module.exports = call;