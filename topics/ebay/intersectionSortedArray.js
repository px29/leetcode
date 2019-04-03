function intersection(a, b) {
    let i = 0;
    let j = 0;
    let r = new Set();
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else if (a[i] > b[j]) {
            j++;
        } else {
            // 或者这里加whileloop， 去掉重复的
            r.add(a[i]);
            i++;
            j++;
        }
    }
    return Array.from(r);
}

function call () {
    console.log(intersection([1,2,3], [2,4,5,6]));
}

module.exports = call;