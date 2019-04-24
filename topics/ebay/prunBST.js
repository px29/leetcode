function pruneBST(root) {
    if (root === null) {
        return root;
    }
    if (root.val > 0 && root.val < 10) {
        root.left = pruneBST(root.left);
        root.right = pruneBST(root.right);
    } else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        } else {
            
        }
    }
}