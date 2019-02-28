function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function helper(root, map) {
    if (root === null) {
        return 0;
    }
    if (map.has(root)) {
        return map.get(root);
    }
    
    const left = helper(root.left,  map);
    const right = helper(root.right, map);
    console.log(left, right);
    const cur = left + right + root.val;
    map.set(root, cur);
    return cur;
}

var maxPathSum = function() {
    // dsp + memory
    const root = generateTree();
    const map = new Map(); // <node, value>
    const result = helper(root, map);
    return result;
    
};

function generateTree() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    return root;
}

module.exports = maxPathSum;