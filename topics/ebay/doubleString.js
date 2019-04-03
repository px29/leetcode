function doubleString(a, b) {
    let stackA = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "#" && stackA.length > 0) {
            stackA.pop();
        } else {
            stackA.push(a[i]);
        }
    }
    let stackB = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i] === "#" && stackB.length > 0) {
            stackB.pop();
        } else {
            stackB.push(b[i]);
        }
    }
    return stackA.join('') === stackB.join('');
}

function call () {
    console.log(doubleString('abc##', 'ab#'));
    console.log(doubleString('a#bc##', 'b'));
    console.log(doubleString('###', 'a#'));
    console.log(doubleString('###', '#'));
}

module.exports = call;