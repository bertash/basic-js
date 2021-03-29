const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  if (arr.length === 0) {
    return [];
  }

  let array = [...arr];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next' && array.indexOf(i) !== array.length - 1) {
      array[i] = 'cut';
      array[i+1] = 'cut';
    } else if (array[i] === '--discard-next' && array.indexOf(i) === array.length - 1) {
      array[i] = 'cut';
    } else if (array[i] === '--discard-prev' && array.indexOf(i) !== 0) {
      array[i] = 'cut';
      array[i-1] = 'cut';
    } else if (array[i] === '--discard-prev' && array.indexOf(i) === 0) {
      array[i] = 'cut';
    } else if (array[i] === '--double-next' && array.indexOf(i) !== array.length - 1) {
      array[i] = array[i+1];
    } else if (array[i] === '--double-next' && array.indexOf(i) === array.length - 1) {
      array[i] = 'cut';
    } else if (array[i] === '--double-prev' && array.indexOf(i) !== 0) {
      array[i] = array[i-1];
    } else if (array[i] === '--double-prev' && array.indexOf(i) === 0) {
      array[i] = 'cut';
    }
  }
  return array.filter( item => item !== 'cut' && item !== undefined);
};
