function mergeTwoArray(a, b) {
    const r = [];
    let i = 0;
    let j = 0;
    for (i, j; i < a.length && j < b.length; ) {
        if (a[i] < b [j]) {
            r.push(a[i++]);
        } else {
            r.push(b[j++]);
        }
    }
    while (i < a.length) {
        r.push(a[i++]);
    }

    while (j < b.length) {
        r.push(b[j++]);
    }
    return r;
}


function helper (arr, start, end) {
    if (start > end) {
        return [];
    } else if (start === end) {
        return arr[start];
    } else {
        const mid = parseInt((start + end) / 2);
        const a = helper (arr, start, mid);
        const b = helper (arr, mid + 1, end);
        return mergeTwoArray(a, b);
    }

}

function mergeKArray (arr) {
    return helper(arr, 0, arr.length - 1);
}

function call () {
    console.log(mergeKArray([[1,8], [2,7], [3,6], [4,5]]));
}

module.exports = call;