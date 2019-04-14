function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function goRight(root, r) {
    if (!root) {
        return;
    }
    if (root.right) {
        r.push(root.val);
        goRight(root.right, r);
    } else if (root.left) {
        r.push(root.val);
        goRight(root.left, r);
    }
}

function goLeft(root, r) {
    if (!root) {
        return;
    }
    if (root.left) {
        r.push(root.val);
        goLeft(root.left, r);
    } else if (root.right) {
        r.push(root.val);
        goLeft(root.right, r);
    }
}

function goLeave(root, r) {
    if (!root) {
        return;
    }
    goLeave(root.right, r);
    if (!root.left && !root.right) {
        r.push(root.val);
    }
    goLeave(root.left, r);
}
function printBoundaryTree(root) {
    if (!root) {
        return [];
    }
    let r = [];
    r.push(root.val);
    goRight(root.right, r);
    goLeave(root.right, r);
    goLeave(root.left, r);
    goLeft(root.left, r);
    return r;
}

function call () {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    root.right.left.left = new TreeNode(8);
    root.right.left.left.left = new TreeNode(9);
    console.log(printBoundaryTree(root));
}

module.exports = call;