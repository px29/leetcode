var totalFruit = function(tree) {
    // longest subarray to contains two different element;
        // longest subarray to contains two different element;
        let start = 0;
        let end = 0;
        let map = new Map();
        let max = 0;
        while (end <= tree.length) {
            if (map.size >= 2 ) {
                max = Math.max(max, end - start - 1);
                while (map.size > 2) {
                    map.set(tree[start], map.get(tree[start]) - 1);
                    if (map.get(tree[start]) === 0) {
                        map.delete(tree[start]);
                    } 
                    start++;
                }
            }
            if (map.has(tree[end])) {
                map.set(tree[end], map.get(tree[end]) + 1);
            } else {
                map.set(tree[end], 1);
            }
            end++;
        }
        return max;
};

function call () {
    console.log(totalFruit([0,1,2]));
}

module.exports = call;