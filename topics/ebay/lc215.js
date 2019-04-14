function swap (nums, i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

function partition(nums, start, end) {
    let j = start;
    let pivot = nums[end];
    for (let i = start; i <= end - 1; i++) {
        if (nums[i] <= pivot) {
            swap(nums, i, j);
            j++;
        }
    }
    swap(nums, j, end);
    return j;
}

function helper (nums, k, start, end) {
    if (start === end) {
        return nums[start];
    }
    const p = partition(nums, start, end);
    if (p + 1 === k) {
        return nums[p];
    } else if (p + 1 < k) {
        return helper(nums, k, p + 1, end);
    } else {
        return helper(nums, k, start, p - 1);
    }
}

var findKthLargest = function(nums, k) {
    return helper(nums, nums.length - k, 0, nums.length - 1);
};

function call () {
    console.log(findKthLargest([3,2,1,5,6,4], 2));
}

module.exports = call;