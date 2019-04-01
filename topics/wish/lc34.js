

var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end;
        }
    }
    console.log(start, end);
};