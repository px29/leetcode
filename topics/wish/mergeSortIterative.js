function mergeSortIterative(arr) {
    for (let step = 1; step < arr.length; step *= 2) {
        for (let left = 0; left < arr.length - 1; left += 2 * step) {
            const mid = left + step - 1;
            const right = Math.min(left + 2 * step - 1, arr.length - 1);
            merge(arr, left, mid, right);
        }
    }
    console.log(arr);
}

function mergeI (arr) {
    for (let step = 1; step < arr.length; step *= 2) {
        for (let start = 0; start < arr.length - 1; start += step * 2) {
            let mid = start + step - 1;
            let end = start + 2 * step - 1;
            merge (arr, start, mid, end);
        }
    }
}

function merge(arr, start, mid, end) {
    let r = [];
    let s = start;
    let e = mid + 1;
    while (s <= mid && e <= end) {
        if (arr[s] < arr[e]) {
            r.push(arr[s++]);
        } else {
            r.push(arr[e++]);
        }
    }
    while (s <= mid) {
        r.push(arr[s++]);
    }
    while (e <= end) {
        r.push(arr[e++]);
    }
    for (let i = start; i <= end; i++) {
        arr[i] = r[i - start];
    }
}

function merge(arr, start, mid, end) {
    let r = [];
    let a = start;
    let b = mid + 1;
    while (a <= mid && b <= end) {
        if (arr[a] < arr[b]) {
            r.push(arr[a]);
            a++;
        } else {
            r.push(arr[b]);
            b++;
        }
    }
    while (a <= mid) {
        r.push(arr[a++]);
    }
    while (b <= end) {
        r.push(arr[b++]);
    }
    for (let i = start; i <= end; i++) {
        arr[i] = r[i - start];
    }
}

function sort(arr, start, end) {
    if (start >= end) {
        return;
    }
    const mid = parseInt((start + end) / 2);
    sort(arr, start, mid);
    sort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}


function mergeSort(arr) {
    sort(arr, 0, arr.length - 1);
}

function call() {
    const r = [2,1,4,5,3,6];
    mergeSortIterative(r);
    console.log(r);
}

module.exports = call;