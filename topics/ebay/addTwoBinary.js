function addTwoBinaryString(a, b) {
    let r = '';
    let c = 0;
    let i = a.length - 1, j = b.length - 1
    for (i, j; i >= 0 && j >= 0; i--, j--) {
        let sum = parseInt(a[i]) + parseInt(b[j]) + c;
        const cur = (sum % 2).toString();
        c = parseInt(sum / 2);
        r = cur + r;
    }
    while (i >= 0) {
        let sum = parseInt(a[i]) + c;
        const cur = (sum % 2).toString();
        c = parseInt(sum / 2);
        r = cur + r;
        i--;
    }
    while (j >= 0) {
        let sum = parseInt(b[j]) + c;
        const cur = (sum % 2).toString();
        c = parseInt(sum / 2);
        r = cur + r;
        j--;
    }
    if (c !== 0) {
        r = c + r;
    }
    return r;
}

function call () {
    console.log(addTwoBinaryString('000111', '0011010'));
}

module.exports = call;