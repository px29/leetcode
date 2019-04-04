function findMissingNumber(arr) {
    const set = new Set(arr);
    let r = [];
    for (let i = 1; i <= arr.length; i++) {
        if (!set.has(i)) {
            r.push(i);
        }
    }
    return r;
}

function call() {
    console.log(findMissingNumber([5, 5, 2, 8, 1, 2, 5, 7]));
}

module.exports = call;