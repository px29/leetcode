function swap(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function partition (arr, start, end) {
    let pivot = arr[end];
    let i = start;
    for (let j = start; j <= end; j++) {
        if (arr[j] <= pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, end);
    return i;
}

function partition1(arr, pivot) {
    let start = 0;
    let end = arr.length - 1;
    for (let i = 0; i <= end; i++) {
        while (arr[i] > pivot && end > i) {
            swap(arr, i, end--);
        }
        while (arr[i] < pivot && start < i) {
            swap(arr, i, start++);
        }
    }
    return arr;
}

function call() {
     console.log(partition1([1,1,1,1,1,2,0,0,0], 1));
}

module.exports = call;