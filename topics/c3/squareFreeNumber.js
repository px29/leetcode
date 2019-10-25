function squareFreeNumber(n) {
    if (n % 2 === 0) {
        n = Math.floor(n / 2);
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            n = Math.floor(n / i); 
        }
    }
}
