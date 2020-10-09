const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  
  function amountOfOperations (x, disksNumber) {
    if (disksNumber == 1) {
      return x;
    } else {
      return 2*amountOfOperations(x, disksNumber-1);
    }
  }

result.turns = amountOfOperations(2, disksNumber)-1;
result.seconds = Math.floor((result.turns * 3600) / turnsSpeed);

return result;

};
