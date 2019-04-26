var maxSumTwoNoOverlap = function(A, L, M) {
    const presum = [0];
    for (const a of A) {
        presum.push(presum[presum.length - 1] + a);
    }
    console.log(presum); 
    let r = 0;
    for (let i = 0; i < presum.length - L; i++) {
        const c = presum[i + L] - presum[i];
        let j = i - 1;
        if (j - M >= 0) {
            const d = presum[j] - presum[j - M];
            r = Math.max(r, d + c);
            j--;
        }
        j = i + L;
        if (j + M < presum.length) {
            const d = presum[j + M] - presum[j];
            r = Math.max(r, d + c);
            j++;
        }
    }
    return r;
};

function call () {
    console.log(maxSumTwoNoOverlap([1,0,3], 1, 2));
}

module.exports = call;