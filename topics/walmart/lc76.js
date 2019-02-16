function isContainsAllChars(s, tMap, left, right) {
    const map = new Map();
    for (let i = left; i < right; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let result = true;
    tMap.forEach((value, key) => {
        if (!map.has(key) || map.get(key) < value) {
            result = false;
            return;
        }
    });
    return result;
}

var minWindow = function(s, t) {
    if (t.length === 0) {
        return true;
    }
    let left = 0;
    let right = 0;
    let result = '';
    const tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }
    let flag = false;
    while (right <= s.length) {
        flag = isContainsAllChars(s, tMap, left, right);
        if (!flag) {
            right++;
        } else if (left + t.length <= right) {
            if (result.length > 0) {
                result =
                    result.length > right - left
                        ? s.substring(left, right)
                        : result;
            } else {
                result = s.substring(left, right);
            }
            left++;
        }
    }
    return result;
};

module.exports = minWindow;
