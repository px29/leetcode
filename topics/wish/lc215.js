function swap(nums, i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}


function partition (nums, start, end) {
    let i = start;
    const pivot = nums[end];
    for (let j = 0; j < end; j++) {
        if (pivot >= nums[j]) {
            swap(nums, i, j);
            i++;
        }
    }
    swap(nums, i, end);
    return i;
}

function position (nums, k, start, end) {
    if (start >= end) {
        return nums[start];
    }
    const p = partition(nums, start, end);
    if (p + 1 === k) {
        return nums[p];
    } else if (p + 1 < k) {
        return position(nums, p + 1, end);
    } else {
        return position(nums, start, p - 1);
    }
}


var findKthLargest = function(nums, k) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    const p = position (nums, k, 0, nums.length - 1);
    return p;
};

function call() {
    console.log(findKthLargest([3,2,1,5,6,4], 2));
}

module.exports = call;