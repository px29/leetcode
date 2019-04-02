function merge (arr1, arr2) {
    const result = [];
    let i = 0, j = 0
    for (i, j; i < arr1.length && j < arr2.length; ) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j++]);
        } else {
            result.push(arr1[i++]);
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i++]);
    }

    while (j < arr2.length) {
        result.push(arr2[j++]);
    }
    return result;
}

function call() {
    console.log(merge([1,2,3], [3,4,5]));
}

module.exports = call;