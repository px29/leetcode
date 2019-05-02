var minDominoRotations = function(A, B) {
    //就是两个array 的元素，最少的交换次数，使得其中一个array 的元素一致。
     // 保证一致的方式，对A 做统计，如果A中存在最多的元素，在B 中存在插值的数量，且index 能对上，那么就可以，
    // 同理对B 做同样的操作。
    const countA = new Array(7).fill(0);
    const countB = new Array(7).fill(0);
    const same = new Array(7).fill(0);
    for (let i = 0; i < A.length; i++) {
        countA[A[i]]++;
        countB[B[i]]++;
        if (A[i] === B[i]) {
            console.log(A[i]);
            same[A[i]]++;
        }
    }
    console.log(countA, countB, same);
    let r = A.length;
    for (let i = 1; i < 7; i++) {
        if (countA[i] + countB[i] - same[i] >= A.length) {
            r = Math.min(r, Math.min(countA[i], countB[i]) - same[i]);
        }
    }
    return r === A.length ? -1 : r;
};

function call() {
    console.log(minDominoRotations([3,5,1,2,3],
        [3,6,3,3,4]));
}

module.exports = call;