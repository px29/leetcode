
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // recursive
    if (!nums || nums.length === 0) {
        return null;
    }
    const l = nums.length;
    const half = Math.floor(l / 2);
    const leftArray = nums.slice(0, half);
    const rightArray = nums.slice(half + 1);
    const root = new TreeNode(nums[half]);
    const leftNode = sortedArrayToBST(leftArray);
    const rightNode = sortedArrayToBST(rightArray);
    root.left = leftNode;
    root.right = rightNode;
    return root;
};

module.exports = sortedArrayToBST;