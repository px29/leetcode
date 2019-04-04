function doubleValid (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr[i] *= 2;
            arr[i + 1] *= 0;
        }
    }
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[start++] = arr[i];
        }
    }
    while (start < arr.length) {
        arr[start++] = 0;
    }
    return arr;
}

function call(){
    console.log(doubleValid([0, 2, 2, 2, 0, 6, 6, 0, 0, 8]));
}

module.exports = call;