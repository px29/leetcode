function threeSumWithMultiplicity(A, target) {
        A.sort((a, b) => a - b);
        let result = 0;
        for (let i =  0; i < A.length - 2; i++) {
            let start = i + 1;
            let end = A.length - 1;
            while (start < end) {
                const sum = A[i] + A[start] + A[end];
                if (sum === target) {
                    
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
        return result % (10 ** 9 + 7);
}

function call () {
    threeSumWithMultiplicity([1,1,2,2,2,2], 5);
}

module.exports = call;