const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let firstLetters = [];
  let newArr = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      newArr.push(members[i].trim());
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    firstLetters.push (newArr[i][0]);
  }
  return firstLetters.sort().join('').toUpperCase();
} else {
  return false;
}
};
