var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0 ;i < nums.length - 2; i++){
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            if ((nums[i] + nums[start] > nums[end]) && (nums[i] + nums[end] > nums[start])) {
                count++;
                start++;
            } else if (nums[i] + nums[start] <= nums[end]) {
                start++;
            } else {
                end--;
            }            
        }
    }
    return count;
};

function call() {
    console.log(triangleNumber([2,2,3,4]));
}
module.exports = call;