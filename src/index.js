
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let matrixSort = [];

  if(!Array.isArray(matrix) || matrix.length === 0) return [];
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrixSort = matrixSort.concat(matrix[i].reverse());
      } else {
        matrixSort = matrixSort.concat(matrix[i]);
      }
  }

  return matrixSort;
}
