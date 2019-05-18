var sumSubarrayMins = function(A) {
    // 暴力是排列组合，找到每个元素的最小值
    // 滑动窗口也可以的，维护一个A 长度的窗口，每次移动窗口，都要计算窗口中的最小值
    // 这个窗口值是跟走过的元素有关的
    // priority queue， A 长度的， 用来得到窗口中的最小值
    
    // 大神解法：
    // 首先你要知道有这么个公式r = sum(A[i] * f(i))
    // f(i) 表示的是以A[i] 为最小值的subarray 的个数
    // 需要两个stack，找到左右都比他大的数量。这些数字和它构成的subarray 是以它为最小的subarray
    const left = []; // stack => <[value, count]>
    const l = []
    const right = [];
    const r = [];
    for (const a of A) {
        let count = 0;
        while (left.length > 0 && a < left[left.length - 1][0]) {
            count += left[left.length - 1][1] + 1;
            left.pop();
        }
        left.push([a, count]);
        l.push(count + 1);
    }
    for (let i = A.length - 1; i >= 0; i--) {
        let count = 0;
        while (right.length > 0 && A[i] < right[right.length - 1][0]) {
            count += right[right.length - 1][1] + 1;
            right.pop();
        }
        right.push([A[i], count]);
        r.push(count + 1);
    }
    r.reverse();
    console.log(l, r);
    let sum = 0;
    const mod = 10 ** 9 + 7;
    for (let i = 0; i < A.length; i++) {
       sum += A[i] * l[i] * r[i];
    }
    return sum;
};

function call () {
    console.log(sumSubarrayMins([3,1,2,4]));
}

module.exports = call;