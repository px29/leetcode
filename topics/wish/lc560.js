var subarraySum = function(nums, k) {
    const map = new Map();
    let r = [];
    let sum = 0;
    map.set(0, [-1]);//<sum , [...indices]>
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
           \
        }
        if (map.has(sum)) {
            let c = map.get(sum);
            let indice = [...c, i];
            map.set(sum, indice);
        } else {
            map.set(sum, [i]);
        }
    }
    return r;
};

function call () {
    console.log(subarraySum([1,1,1], 2));
}
module.exports = call;