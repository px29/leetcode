var minimumTotal = function(triangle) {
    if (triangle === undefined || triangle.length === 0) {
        return 0;
    }
    const length = triangle.length - 1;
    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};

module.exports = {
    minimumTotal,
};