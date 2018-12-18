var removeDuplicates = function(nums) {
    let count = 1;
    let index = 0;
    if (nums === undefined || nums.length === 0) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            nums[++index] = nums[i];
            count = 1;
        } else if (nums[i] === nums[index] && count < 2) {
            nums[++index] = nums[i];
            count++;
        } else {
            count++;
        }
    }
    return ++index;
};

module.exports.removeDuplicates = removeDuplicates;