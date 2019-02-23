function partition (nums, start, end) {
    let left = start;
    let right = end;
    const pivot = nums[right];
    for (let i = left ; i < right; i++) {
        if (nums[i] <= pivot) {
            const t = nums[left];
            nums[left] = nums[i];
            nums[i] = t;
            left++;
        }
    }
    const t = nums[left];
    nums[left] = nums[right];
    nums[right] = t;
    return left; 
}

function helper (nums, k, start, end) {
    if (start >= end) {
        return nums[start];
    }
    const position = partition(nums, start, end);
    if (position + 1 === k) {
        return nums[position];
    } else if(position + 1 < k) {
        return helper(nums, k, k + 1, end);
    } else {
        return helper(nums,k, start, k - 1);
    }
}

var findKthLargest = function(nums, k) {
    const result = helper(nums, k, 0, nums.length - 1);
    return result;
};

module.exports = {findKthLargest, partition};