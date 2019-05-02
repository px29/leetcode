var maxTurbulenceSize = function(A) {
    // turbulenct 是在说存在一个k ，
    // (1) [i, j)这个区间里面，
    // 如果k % 2 === 0: A[k] < A[k + 1] || k % 2 === 1: A[k] > A[k + 1]
    // (2) 
    // odd[i] odd
    // 两个
    const case1 = new Array(A.length).fill(1);
    const case2 = new Array(A.length).fill(1);
    let max = 0;
    for (let k = 1; k < A.length; k++) {
        if (k % 2 === 1) {
            if (A[k] < A[k - 1]) {
               case1[k] = case1[k - 1] + 1; 
            } else if (A[k] > A[k - 1]) {
                case2[k] = case2[k - 1] + 1;
            }
        } else {
            if (A[k] > A[k - 1]) {
               case1[k] = case1[k - 1] + 1; 
            } else if (A[k] < A[k - 1]) {
                case2[k] = case2[k - 1] + 1;
            }
        }
        max = Math.max(max, case1[k], case2[k]);
    }
    return max;
};

function call () {
    console.log(maxTurbulenceSize([100]));
}

module.exports = call;