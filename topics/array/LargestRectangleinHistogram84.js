const largestRectangleArea = function(heights) {
    let result = 0;
    let stack = new Array();
    stack.push(-1);
    for (let i = 0; i < heights.length; i++) {
        let top = stack[stack.length  - 1];
        while (top !== -1 && heights[i] <= heights[top]) {
            top = stack.pop();
            const height = heights[top];
            const temp = height * (i - 1 - stack)
            result = Math.max(temp, result);
        }
        stack.push(i);
    }
    return result;
};

module.exports = {
    largestRectangleArea,
};