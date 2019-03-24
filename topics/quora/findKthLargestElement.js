function swap (nums, i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

function position (nums, start, end) {
    let i = start;
    let e = end;
    let pivot = nums[e];
    for (let j = 0; j < nums.length - 1; j++) {
        if (pivot > nums[i]) {
            swap(nums, i, j);
            i++;
        }
    }
    swap(nums, i, e);
    return i;
}


function helper (nums, k, start, end) {
    if (start >= end) {
        return nums[start];
    }
    const p = position(nums, start, end);
    if (p + 1 === k) {
        return nums[p];
    } else if (p + 1 < k) {
        return helper(nums, k, p + 1, end);
    } else {
        return helper(nums, k, start, p - 1);
    }
}

var findKthLargest = function(nums, k) {
    return helper (nums, k, 0, nums.length - 1);
};

function call() {
    console.log(findKthLargest([3,2,1,5,6,4], 6));
}

module.exports = call;