function closest2Sum (nums1, nums2, target) {
    let result = [];
    let closest = Number.MAX_VALUE;
    const set = new Set();
    for (const a of nums1) {
        for (const b of nums2) {
            if (Math.abs(target - a - b) < closest) {
                result = [];
                closest = target - a - b;
                result.push([a, b]);
                set.clear();
            } else if (target - a - b === closest && !set.has(a) && !set.has(b)) {
                result.push([a, b]);
                set.add(a);
                set.add(b);
            }
        }
    }
    return result;
}

module.exports = closest2Sum;