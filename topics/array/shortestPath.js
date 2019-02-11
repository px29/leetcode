


var shortestPath = () => {


}

var pairSum = (l1, l, total) => {
    const result = [];
    const diff = Number.MAX_VALUE;
    l1.sort(a,b => a - b);
    l2.sort(a,b => a - b);

    l1.forEach(e => {
        const location = l2.binarySearch(total - e); // 返回插入的位置
        if (location < l2.length) {
            
        }
        const r1 = location < l2.length || (target - (l2[location] + e));
        const r2 = location + 1 < l2.length || (target - (l2[location + 1] + e));
        const r3 = location - 1 >= 0 || (target - (l2[location - 1] + e));
        
    });

}