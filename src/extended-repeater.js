const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  
  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

 

  let res = '';

   if(options.addition  + '' && options.addition !== undefined) {
    res = (options.addition + '' + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  return (str + res + options.separator).repeat(options.repeatTimes - 1) + str + res;

};