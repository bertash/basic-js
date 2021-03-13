const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity != "string") {
    return false;
  }

  let act = +sampleActivity;

  if (act <= 0 || act > MODERN_ACTIVITY || !isFinite(act)) {
    return false;
  }

  return Math.ceil(
    (Math.log(MODERN_ACTIVITY / act) * HALF_LIFE_PERIOD) / 0.693
  );
};
