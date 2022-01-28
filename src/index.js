
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let sortArray = [];
  if (matrix === undefined) {
    return []
  } 
  for (i = 0; i <= matrix.length; i++) {
    if (i % 2 === 0) {
      sortArray = sortArray.concat(matrix[i].reverse());
    } else {
      sortArray = sortArray.concat(matrix[i]);
    }
  }
  return sortArray;
}
