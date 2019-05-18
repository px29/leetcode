var partitionDisjoint = function(A) {
    // 我们需要找到一个分割点，把array 分成两个部分，使得左边的所有元素一定比右边的任意元素小。
    // 两个最小值，一个是从左往右，一个是从右往左
    // 
    let maxLeft = [];
    for (const a of A) {
        if (maxLeft.length > 0 && maxLeft[maxLeft.length - 1] > a) {
            maxLeft.push( maxLeft[maxLeft.length - 1])
        } else {
            maxLeft.push(a);
        }
    }
    let minRight = [];
    for (let i = A.length - 1; i >=0; i--) {
        if (minRight.length > 0 && minRight[minRight.length - 1] < A[i]) {
            minRight.push( minRight[minRight.length - 1])
        } else {
            minRight.push(A[i]);
        }
    }
    minRight.reverse();
    console.log(maxLeft, minRight);
    for (let i = 0 ; i < A.length; i++) {
        if (maxLeft[i] < minRight[i]) {
            return i;
        }
    }
    return -1;
};

function call() {
    console.log(partitionDisjoint([5,0,3,8,6]));
}

module.exports = call;