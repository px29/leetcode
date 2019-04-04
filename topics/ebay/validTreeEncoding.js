function validTreeEncoding (arr) {
    // 所有的array 必须含有三个元素，如果出现第四个，false
    // 空节点不能有子节点。
    // 正常节点的子节点可以是空，也可以是array，也就是另一个子树
    if (arr[0] === null) {
        return arr.length === 1;
    } else if (arr.length !== 3) {
        return false;
    }
    for (let i = 0; i < 3; i++) {
        if (arr[i] instanceof Array) {
            const r = validTreeEncoding(arr[i]);
            if (!r) {
                return false;
            } 
        }
    }
    return true;
}

function call () {
    console.log(validTreeEncoding([null]));
    console.log(validTreeEncoding([1,2,null]));
    console.log(validTreeEncoding([1,[null], null]));
    console.log(validTreeEncoding([1, [2, [3, null, null],[4, null, null],2], null]));
}

module.exports = call;