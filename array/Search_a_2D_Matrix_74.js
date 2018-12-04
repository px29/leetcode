export const searchMatrix = function(matrix, target) {
  if (matrix === undefined || matrix.length === 0) {
    return false;
  }
  let start = 0;
  const l = matrix[0].length;
  let end = matrix.length * l - 1;
  let i = 0;
  let j = end;
  while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    i = Math.ceil(mid / l) - 1;
    j = (mid % l) - 1;
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return matrix[i][j] === target;
};
