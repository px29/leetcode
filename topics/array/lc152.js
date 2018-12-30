var maxProduct1 = function(nums) {
    let positive;
    let negative;
    let result = 0;
    
    if (nums === undefined || nums.length === 0) {
        return result;
    } else if (nums[0] > 0) {
        positive = nums[0];
    } else {
        negative = nums[0];
    }
    result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) {
            positive.push(Math.max(nums[i], positive[i - 1] * nums[i]));
            if (negative[i - 1]) {
                negative.push(negative[i - 1] * nums[i]);
            }
        } else {
            if (negative[i - 1]) {
                
            }

            negative.push(Math.min(nums[i], positive[i - 1] * nums[i]));  
        }
        result = Math.max(positive[i], result);
    }
    return result;
};

var maxProduct = function(nums) {
    if(nums === undefined || nums.length === 0) {
        return 0;
    }
    let result = nums[0];
    
    for (let i = 1, max = result, min = result; i < nums.length; i++) {
        if (nums[i] < 0) {
            const temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);
        result = Math.max(result, max);
    }
    return result;
};

module.exports = {
    maxProduct,
};