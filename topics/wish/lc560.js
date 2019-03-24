
function helper(nums, k, r, temp, start) {
    if (k === 0) {
        r.push(temp.slice());
        return;
    }
    
    for (let i = start; i < nums.length; i++) {
        if (k >= nums[i]) {
            temp.push(nums[i]);
            helper(nums, k - nums[i], r, temp, i + 1);
            temp.pop();
        }
    }
}

var subarraySum = function(nums, k) {
    const r = [];
    helper (nums, k, r, [], 0);
    return r;
};

function call () {
    console.log(subarraySum([1,1,1], 2));
}
module.exports = call;