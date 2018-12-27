function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var buildTree = function(inorder, postorder) {
    if (inorder === undefined || inorder.length === 0 || postorder === undefined || postorder.length === 0) {
        return null;
    }
    const root = new TreeNode(postorder[postorder.length - 1]);
    const dividerMarker = inorder.indexOf(postorder[postorder.length - 1]);
    const leftInorder = inorder.slice(0, dividerMarker);
    const rightInorder = inorder.slice(dividerMarker + 1);
    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
    const leftNode = buildTree(leftInorder, leftPostorder);
    const rightNode = buildTree(rightInorder, rightPostorder);
    root.left = leftNode;
    root.right = rightNode;
    return root;
};

module.exports = {
    buildTree,
};