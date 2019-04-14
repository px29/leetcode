
function reverse (n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

function isPalindrom(a) {
    const s = a.toString();
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
function helper(n, count) {
    const r = reverse(n);
    count[0]++;
    if (isPalindrom(n + r)) {
        return;
    }
    helper(n + r, count);
}

function palindromSum(n) {
    const count = [0];
    helper (n, count)
    return count[0];
}

function call() {
    console.log(palindromSum(100));
}

module.exports = call;