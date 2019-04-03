function TreeNode (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function addLayer(root, depth, val) {
    if (root.left === null && root.right === null && depth >= 1) {
        root.left = new TreeNode(val);
        root.right = new TreeNode(val);
        return;
    } else if (depth === 0 ) {
        const left = root.left;
        const right = root.right;
        root.left = new TreeNode(val);
        root.right = new TreeNode(val);
        root.left.left = left;
        root.left.right = left;
        root.right.left = right;
        root.right.right = right;
        return;
    } else {
        addLayer(root.left, depth - 1, val);
        addLayer(root.right, depth - 1, val);
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);


function call () {
    addLayer(root, 4, '*');
    console.log(root);
}

module.exports = call;