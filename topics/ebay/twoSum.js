function twoSum(arr, target) {
    const map = new Map(); // value index
    const r = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            map.get(target - arr[i]).forEach(e => {
                r.push([e, i]);
            })
        }
        if (map.has(arr[i])) {
            map.get(arr[i]).push(i);
        } else {
            map.set(arr[i], [i]);
        }
    }
    return r;
}

function call() {
    console.log(twoSum([2,2,2,2], 4));
}

module.exports = call;