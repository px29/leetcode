function Node (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function inorder(root) {
    const stack = [];
    stack.push(root);
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        console.log(root.val);
        if (root.right) {
            root = root.right;
        }
    }
}

function preorder(root) {
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        root = stack.pop();
        if (root.right) {
            stack.push(root.right);
        }
        if (root.left) {
            stack.push(root.left);
        }
    }
}

function postorder(root) {
    
}