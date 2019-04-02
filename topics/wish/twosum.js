function twoSum (arr, target) {
    const map = new Map();
    const r = [];
    for (let i = 0; i < arr.length; i++) {
       if (map.has(target - arr[i])) {
            const t = map.get(target - arr[i]);
            t.forEach(e => {
                r.push([e, i]);
            });
       }
       if (map.has(arr[i])) {
           map.set(arr[i], [...map.get(arr[i]), i]);
       } else {
           map.set(arr[i], [i]);
       }
    }
    return r;
}

function call () {
    console.log(twoSum([2,2,2], 4));
}

module.exports = call;