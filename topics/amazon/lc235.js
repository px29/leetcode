var lowestCommonAncestor = function(root, p, q) {
    if (!!root && root.val > p && root.val > q) {
        console.log('xx');
        return lowestCommonAncestor(root.left, p, q);
    } else if (!!root && root.val < p && root.val < q) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        console.log('zzz');
        return root;
    }
};

module.exports = lowestCommonAncestor;
