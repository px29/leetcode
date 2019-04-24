function compare(a, b, i) {
    for (let j = 0; j < b.length; j++) {
        if (a[i + j] !== b[j]) {
            return false;
        }
    }
    return true;
}


function rotateArray(a, b) {
    if (!a && b || a && !b || a.length !== b.length) {
        return false;
    }
    const n = a.concat(a);
    for (let i = 0; i < n.length; i++) {
        if (compare(n, b , i)) {
            return true;
        }
    }
    return false;
}

function call () {
    console.log(rotateArray([1,2,3,4,5,6,7], [5,6,7,1,2,3,4]));
}

module.exports = call;