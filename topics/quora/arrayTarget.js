
function transfer(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i !== max) {
            arr[max] -= arr[i];
        }
    }
    return arr;
}


function arrayTarget (start, end) {
    let count = 0;
    while (JSON.stringify(start) !== JSON.stringify(end)) {
        end = transfer(end);
        count++;
    }
    return count;
}

function call () {
    console.log(arrayTarget([1,1], [1,2]));
}

module.exports = call;