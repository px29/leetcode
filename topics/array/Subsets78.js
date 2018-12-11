var dfs = function(nums, result, temp, start) {
  result.push(temp.slice(0));
  for (let i = start; i < nums.length; i++) {
    temp.push(nums[i]);
    dfs(nums, result, temp, i + 1);
    temp.pop();
  }
};

var subsets = function(nums) {
  const result = [];
  dfs(nums, result, [], 0);
  return result;
};

module.exports.subsets = subsets;
