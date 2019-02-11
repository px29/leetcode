function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var buildTree = function(preorder, inorder) {
    if (
        preorder === undefined ||
        preorder.length === 0 ||
        inorder === undefined ||
        inorder.length === 0
    ) {
        return null
    }
    const root = new TreeNode(preorder[0])
    const divideIndex = inorder.findIndex(element => element === preorder[0])
    const leftChild = buildTree(
        preorder.slice(1, divideIndex + 1),
        inorder.slice(0, divideIndex)
    )
    const rightChild = buildTree(
        preorder.slice(divideIndex + 1),
        inorder.slice(divideIndex + 1)
    )
    root.left = leftChild
    root.right = rightChild
    return root
}

module.exports = {
    buildTree,
}
