/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[start]) {
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return nums[end] === target ? end : -1;
};
function call () {
    search([4,5,6,7,0,1,2], 0);
}

module.exports = call;