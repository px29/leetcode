
function sort (arr, start, end) {
    if (start >= end) {
        return arr[start];
    }
    let left = start;
    let right = end;
    let pivot = arr[end];
    while (left <= right) {
        while (left <= right && arr[right] > pivot) {
            right--;
        }
        while (left <= right && arr[left] < pivot) {
            left ++;
        }
        if (left <= right) {
            const t = arr[left];
            arr[left] = arr[right];
            arr[right] = t;
            left++;
            right--;
        }
    }
    sort(arr, start, right);
    sort(arr, left, end);
}

function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
}

function call () {
    const a = [5,2,1,3,4,6];
    quickSort(a);
    console.log(a);
}

module.exports = call;