const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;

    arr = arr.filter((item) => Array.isArray(item));
    if (arr.length > 0) {
      arr = arr.flat();
      res += this.calculateDepth(arr);
    }
    return res;
  }
};