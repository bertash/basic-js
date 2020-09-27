const CustomError = require("../extensions/custom-error");


module.exports = function countCats(matrix) {
  let newArr = matrix.flat();
  let counter = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '^^') {
      counter++;
    }
  }
  return counter;
};
