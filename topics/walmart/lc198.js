var rob = function(nums) {
    const rob = new Array(nums.length);
    const noRob = new Array(nums.length);
    
    rob[0] = nums[0];
    noRob[0] = 0;
    
    for (let i = 1; i < nums.length; i++) {
        const r = noRob[i - 1] + nums[i];
        const nr = Math.max(rob[i - 1], noRob[i - 1]);
        rob[i] = r;
        noRob[i] = nr;
    }
    
    return Math.max(rob[nums.length - 1], noRob[nums.length - 1]);
    
};

module.exports = rob;