var largestRectangleArea1 = function(heights) {
    let result = 0;
    for (let end = 0; end < heights.length; end++) {
        for (let start = 0; start <= end; start++) {
            let height = Number.MAX_VALUE;
            for (let k = start; k <= end; k ++) {
                height = Math.min(height, heights[k]);
            }
            result = Math.max(result, parseInt(height * (end - start + 1)));
        }
    }
    return result;
};


var dividedAndConquer = function(heights, start, end) {
    if (start > end) {
        return 0;
    }
    let minIndex = start;
    for (let i = start; i <= end; i++) {
        if (heights[minIndex] > heights[i]) {
            minIndex = i;
        }
    }
    const left =  dividedAndConquer(heights, start, minIndex - 1);
    const right =  dividedAndConquer(heights, minIndex + 1, end);
    const current = heights[minIndex] * (end - start + 1);
    console.log(left, current, right);
    return Math.max(current, Math.max(left, right));
}

var largestReactangleArea2 = function(heights) {
    const result = dividedAndConquer(heights, 0, heights.length - 1);
    console.log(result);
    return result;
}

var largestReactangleArea3 = function(heights) {
    const stack = new Array();
    stack.push(-1); //
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
            const top = stack.pop();
            const temp = (i - 1 - stack[stack.length - 1]) * heights[top];
            result = Math.max(temp, result);
        }
        stack.push(i);
    }  

    while (stack[stack.length - 1] !== -1) {
        const top = stack.pop();
        const temp = (heights.length - 1 - stack[stack.length - 1]) * heights[top];
        result = Math.max(temp, result);
    }
    return result;
}

module.exports = {largestReactangleArea2, largestReactangleArea3};

