function helper(a, max) { // return count
    let count = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i] === max && a[i] > 0) { 
            a[i] = a[i] - 1;
            count++;
        }
    }
    return count;
}

function findMax(a) { 
    let max = 0;
    for (const p of a) { 
        max = Math.max(max, p);
    }
    return max;
}

function maximumAmount(a, k) {
    // Write your code here
    let result = 0;
    while (k > 0) { 
        const max = findMax(a);
        const count = helper(a, max);
        result += parseInt(max * count);
        k -= count;
    }
    return result;
}

module.exports = maximumAmount;