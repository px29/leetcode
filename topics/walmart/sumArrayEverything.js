function sum (arr) {
    let s = 0;
    for (const e of arr) {
        if (typeof e === 'number') {
            s += e;
        } else if (e instanceof Array) {
            s += sum(e);
        } 
    }
    return s;
}

function call () {
    console.log(sum([[1,2,3],4,5]));
    console.log(sum([1,2,3,4,5]));
    console.log(sum(["1jakjsds", 1,2,3,[4,5]]));
    console.log(sum([[1,[2,[3]],4,5]]));
}
module.exports = call;