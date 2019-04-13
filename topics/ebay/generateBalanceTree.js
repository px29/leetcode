function TreeNode (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function helper (arr, start, end) {
    if (start > end) {
        return null;
    } else if (start === end) {
        return new TreeNode(arr[start]);
    } else {
        const mid = parseInt((end + start) / 2) ;
        const node = new TreeNode(arr[mid]);
        node.left = helper(arr, start, mid - 1);
        node.right = helper(arr, mid + 1, end);
        return node;
    }
}

function generateBalanceTree(arr) {
    if (!arr) {
        return null
    }
    return helper (arr, 0, arr.length - 1);
}

function call () {
    let r = generateBalanceTree([1,2,3]);
    console.log(r);
}

module.exports = call;