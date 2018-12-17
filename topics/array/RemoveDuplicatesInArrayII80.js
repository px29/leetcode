var removeDuplicates = function (nums) {
    let count = 1;
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
       if ((nums[i] === nums[index] && count < 3) || nums[i] !== nums[index]) {
        
       } else {
           count++;
       }
    }
    return index;
};

module.exports.removeDuplicates = removeDuplicates;