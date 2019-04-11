function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const i = parseInt(Math.random() * arr.length);
        const t = arr[0];
        arr[0] = arr[i];
        arr[i] = t;
    }
    return arr;
}

function call () {
    console.log(shuffleArray([1,2,3,4,5]));
}

module.exports = call;