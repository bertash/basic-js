const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  if (arr.length == 0) {
    return [];
  }


let array = [...arr];
let res = [];



for (let i = 0; i < array.length; i++) {

  if (array[i] == '--double-next' && array.length - 1 !== array.indexOf('--double-next') ) {
    array.splice(array.indexOf('--double-next'), 1, array[i+1]);
  }
  if (array[i] == '--double-prev' && array.indexOf('--double-prev') !== 0) {
    array.splice(array.indexOf('--double-prev'), 1, array[i-1]);
  } 
  if (array[i] == '--double-prev' && array.indexOf('--double-prev') == 0) {
    array.splice(i,1);
  }
  if (array[i] == '--discard-prev' && array.indexOf('--discard-prev') !== 0) {
    array.splice(i-1, 2);
  } else if (array[i] == '--discard-prev' && array.indexOf('--discard-prev)' == 0)) {
    array.splice(i, 1);
  }
  if (array[i] == '--discard-next') {
    array.splice(array.indexOf('--discard-next'), 2);
  }
}


for(let i = 0; i < array.length; i++) {
  if(array[i] !== '--double-prev' && array[i] !== '--discard-prev' && array[i] !== '--double-next' && array[i] !== '--discard-next' ) {
    res.push(array[i]);
  }
}


return res;

};
