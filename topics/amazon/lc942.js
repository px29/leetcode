var diStringMatch = function(S) {
    // I means we got the char from N increase  
    // D means we got the chars from N decrease
    
    let l = S.length;
    let s = 0;
    const result = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I' ) {
            if (i === 0) {
                 result.push(s++);
            }
            result.push(s++);
        } else {
            if (i === 0) {
                result.push(l--);
            }
            result.push(l--);
        }
    }
    return result;
};

module.exports = diStringMatch;