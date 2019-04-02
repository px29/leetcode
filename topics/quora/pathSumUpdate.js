function helper(root, sum, r, temp) {
    if (root === null) {
        return;
    }
    if (root.val === sum) {
        temp.push(root.val);
        r.push(temp.slice());
        temp.pop();
        return;
    }
    temp.push(root.val);
    helper(root.left, sum - root.val, r, temp);
    helper(root.right, sum - root.val, r, temp);
    temp.pop();
}

var pathSum = function(root, sum) {
    const r = [];
    helper(root, sum, r, []);
    return r;
};