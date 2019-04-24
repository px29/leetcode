var prefixesDivBy5 = function(A) {
    let cur = 0;
    const r = []
    for (const a of A) {
        cur = ((cur << 1) + a);
        r.push(cur % 5 === 0);
    }
    return r;
};

function call () {
    console.log([1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0].length);
    console.log(prefixesDivBy5(
        [1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1]));
}

module.exports = call;