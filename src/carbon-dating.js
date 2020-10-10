const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false;
  }

  if (typeof(sampleActivity) != 'string' || typeof(+sampleActivity) != "NaN" ) {
    return false;
  }

};
