

var isValidBST = function(root) {
    // bst 中序遍历是升序的。
    let head = root;
    const stack = [];
    let prev = null;
    while (stack.length > 0 || head !== null) {
        while (head) {
            stack.push(head);
            head = head.left;
        }
        head = stack.pop();
        if (prev && head.val < prev.val) {
            return false;
        }
        prev = head;
        head = head.right;
    }
    return true;
};

module.exports = isValidBST;