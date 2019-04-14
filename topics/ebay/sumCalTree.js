function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function helper(root) {
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        return [root.val];
    }
    let left = helper(root.left);
    let right = helper(root.right);
    if (root.val === '+') {
        return [...left, ...right];
    } else if (root.val === '-') {
        left = left.map(e => -e);
        right = right.map(e => -e);
        return [...left, ...right];
    } else {
        left = left.map(e => e + root.val);
        right = right.map(e => e + root.val);
        return [...left, ...right];
    }
}

function cal(root) {
    if (root === null) {
        return 0;
    }
    const t = helper(root);
    let min = Number.MAX_SAFE_INTEGER;
    for (const a of t) {
        min = Math.min(a, min);
    }
    return min;
}

function call() {
    const root = new TreeNode(1);
    root.left = new TreeNode('+');
    root.right = new TreeNode('-');
    root.left.left = new TreeNode(3);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(9);
    root.right.left.left = new TreeNode('-');
    root.right.left.left.left = new TreeNode(10);
    console.log(cal(root));
}

module.exports = call;