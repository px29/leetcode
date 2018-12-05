const searchMatrix = function(matrix, target) {
  if (matrix === undefined || matrix.length === 0) {
    return false;
  }
  const w = matrix.length;
  const l = matrix[0].length;
  let start = 0;
  let end = w * l - 1;
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    let i = parseInt(mid / l);
    let j = mid % l;
    console.log(i, j);
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end, parseInt(end / l), end % l);
  return matrix[parseInt(end / l)][end % l] === target;
};

module.exports.searchMatrix = searchMatrix;
