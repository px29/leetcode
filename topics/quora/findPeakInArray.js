function findPeakInArray(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    const peak = start;

    if (arr[peak] === target) {
        return peak;
    }
    start = 0;
    end = peak - 1;
    while (start <= end) {
        const mid = parseInt((end + start) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    start = peak + 1;
    end = arr.length - 1;
    while (start < end) {
        const mid = parseInt((end + start) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function call () {
    console.log(findPeakInArray([1,2,3,4,3,2], 4));
}

module.exports = call;