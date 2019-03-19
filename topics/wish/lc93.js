function helper(s, r, temp, start) {
    if (start === s.length && temp.length === 4) {
        r.push(temp.slice().join('.'));
        return;
    } 
    
    if (temp.length === 4 || start > s.length) {
        return;
    }

    for (let i = 1; i < 4; i++) {
        const sub = s.substring(start, start + i);
        const int = parseInt(sub);
        if (int < 256 && int >= 0) {
            temp.push(sub);
            helper(s, r, temp, start + i + 1);
            temp.pop();
        }
    }
}

var restoreIpAddresses = function(s) {
    // backtracking
    const r = [];
    helper (s, r, [], 0);
    return r;
};

function call () {
    console.log(restoreIpAddresses('25525511135'));
}

module.exports = call;