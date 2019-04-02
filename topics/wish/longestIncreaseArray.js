function longestIncreaseArray(arr) {
    let start = 0;
    let end = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[end]) {
            end++;
        } else {
            max = Math.max(end - start, max);
            start = end;
            end = i;
        }
    }
    return Math.max(max, end - start);
}

function call() {
    console.log(longestIncreaseArray([1]));
}

module.exports = call;