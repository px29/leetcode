var shipWithinDays = function(weights, D) {
    // weights 需要尽量的平分到D days 中，顺序不能变，
    // 也就是使得D 个区间的差值最小
    let sum = 0;
    let start = 0;
    for (const w of weights) {
        start = Math.max(w, start);
        sum += w;
    }
    
    let end = sum;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        let cur = 0;
        let i = 1;
        for (const w of weights) {
            if (cur + w > mid) {
                cur = 0;
                i++;
            }
            cur += w;
        }
        if (i === D) {
            return mid;
        } else if (i > D) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

function call () {
    console.log(shipWithinDays([1,2,3,1,1], 4));
}

module.exports = call;