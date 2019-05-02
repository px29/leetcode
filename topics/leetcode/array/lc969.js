function reverse (A, i) {
    let start = 0;
    while (start < i) {
        const temp = A[start];
        A[start] = A[i];
        A[i] = temp;
        start++;
        i--;
    }
}

var pancakeSort = function(A) {
    // A 是permutation [1, A.length]
    // 每次翻转，需要反转一个元素到位
    // 我们可以找到需要翻转的部分在哪。
    // 也就是排序好的话，就不需要反转了
    // 每次反转前k个
    let sum = [];
    for (let max = A.length; max > 0; max--) {
        let i = 0;
        while (A[i] !== max && i < max) {
            i++;
        }
        reverse(A, i);
        sum.push(i + 1);
        reverse(A, max - 1);
        sum.push(max);
    }
    return sum;
};

function call() {
    console.log(pancakeSort([3,2,4,1]));
}

module.exports = call;