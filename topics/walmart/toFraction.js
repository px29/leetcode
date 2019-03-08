function fraction(num) { // 这个题要真分数，不要假分数，所以不需要用integer 的部分
    const str = num.toString();
    const integer = parseInt(str.split('.')[0]);
    const decimal = parseInt(str.split('.')[1]);

    const dem = 10 ** (str.split('.')[1].length);
    const div = gcd(dem, decimal);
    const numer = decimal / div;
    const denominator = dem / div;
    return `Integer: ${integer}, fraction: ${numer}/${denominator}`;

}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function call() {
    console.log(fraction(2.564));
}

module.exports = call;