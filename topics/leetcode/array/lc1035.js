var maxUncrossedLines = function(A, B) {
    // 找A,B 的公共子序列，最长的， 要保证顺序
    let count1 = 0;
    let i = 0;
    let j = 0;
    while (i < A.length && j < B.length) {
        if (A[i] === B[j]) {
            i++;
            j++;
            count1++;
        } else {
            i++;
        }
    }
    
    let count2 = 0;
    i = 0;
    j = 0;
    while (i < A.length && j < B.length) {
        if (A[i] === B[j]) {
            i++;
            j++;
            count2++;
        } else {
            if (j < B.length - 1) {
                j++;
            } else {
                break;
            }
        }
        console.log(i, j, count2);
    }
    return Math.max(count1, count2);
};

function call () {
    console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2]));
}

module.exports = call;