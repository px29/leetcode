var canReorderDoubled = function(A) {
    // 看例子
    // A[2 * i + 1] = 2 * A[2 * i] 就是说能找到length / 2 个pair
    // 那就尝试着找pair
    // 
    if (A.length % 2 !== 0) {
        return false;
    }
    A.sort((a, b) => a - b);
    const map = new Map();
    for (const a of A) {
        if (a === 0) {
            continue;
        }
        if (!map.has(a)) {
            map.set(a, 0);
        }
        map.set(a, map.get(a) + 1);
    }
    
    for (const a of A) {
        if (a === 0 || map.get(a) === 0) {
            continue;
        }
        const target = a < 0 ? parseInt(a / 2) : a * 2;
        if ((a < 0 && a % 2 !== 0) || !map.has(target) || map.get(a) > map.get(target) ) {
            return false;
        }
        map.set(target, map.get(target) - map.get(a));
        map.set(a, 0);
    }
    return true;
};

function call() {
    console.log(canReorderDoubled([2,1,2,1,1,1,2,2]));
}

module.exports = call;