var subarraysDivByK = function(A, K) {
    // presum + dp
    if (!A || A.length === 0 || K === 0) {
        return 0;
    }
    const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    for (const a of A) {
        sum = (sum + a) % K;
        if (sum < 0) {
            sum += K;
        }
        if (map.has(sum)) {
            count += map.get(sum);
            map.set(sum, map.get(sum) + 1);
        }  else {
            map.set(sum, 1);
        }
    }
    return count;
};

function call () {
    console.log(subarraysDivByK([1,1,1,1], 2));
}

module.exports = call;