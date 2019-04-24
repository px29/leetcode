var maxSumTwoNoOverlap = function(A, L, M) {
    if (!A || A.length ===0 || A.length < L + M) {
        return 0;
    }
    const preSum = [0];
    let cur = 0;
    for (const a of A) {
        preSum.push(cur + a);
        cur += a;
    }
    let r = 0;
    for (let i = L; i < preSum.length; i++) {
        const l = A[i] - A[i - L];
        if (i - L > M) {
            //zai
            let start = M;
            while (start < i - L) {
                const t = l + preSum[start] - preSum[start - M];
                console.log('prev', t);
                r = Math.max(t, r);
                start++;
            }
        }
        if (preSum.length - i > M) {
            let start = i + 1;
            while (start + M < preSum.length) {
                const t = l + preSum[start + M] - preSum[start];
                console.log('after', t);
                r = Math.max(t, r);
                start++;
            }
        }
     }
    return r;
};

function call () {
    console.log(maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2));
}

module.exports = call;