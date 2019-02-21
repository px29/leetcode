function helper(nums, visited, result, temp) {
    if (temp.length === nums.length) {
        result.push(temp.slice(0));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if ((i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) || visited[i]) {
            continue;
        }
        temp.push(nums[i]);
        visited[i] = true;
        helper(nums, visited, result, temp);
        temp.pop();
        visited[i] = false;

    }

}

var permuteUnique = function(nums) {
    nums.sort((a, b) => a- b);
    const result = [];
    const visited = new Array(nums.length);
    visited.fill(false);
    helper(nums, visited, result, []);
    return result;
};

module.exports = permuteUnique;