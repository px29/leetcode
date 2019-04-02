var divide = function(dividend, divisor) {
    let sign = -1;
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ) {
        sign = 1;   
    }
    let newDividend = Math.abs(dividend);
    let newDivisor = Math.abs(divisor);
    
    if (newDividend === 0) {
        return 0;
    }
    if (newDivisor === 0) {
        if (sign === -1) {
            return Number.SAFE_MIN_INTEGER;
        }
        return Number.SAFE_MAX_INTEGER;
    }
    
    let r = helper(newDividend, newDivisor);
    return r * sign;
};

function helper(newDividend, newDivisor) {
    if (newDividend < newDivisor) {
        return 0;
    }
    let sum = newDivisor;
    let count = 1;
    while ((sum + sum) <= newDividend) {
        count += count;
        sum += sum;
    }
    return count + helper(newDividend - sum, newDivisor);
}