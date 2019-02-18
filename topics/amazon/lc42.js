var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while (left < right) {
        const l = height[left];
        const r = height[right];
        if (l < r) {
            left++;
            if (height[left] < l) {
                result += (l - height[left]);
            }
        } else {
            right--;
            if (height[right] < r) {
                result += (r - height[right]);
            }
        }
    }
    return result;
};

module.exports = trap;