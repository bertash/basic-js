const CustomError = require("../extensions/custom-error");

module.exports = class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    let res = [];
    let messageChars = message.toUpperCase().split("");
    let dublicatedKey = key.repeat(Math.ceil(message.length / key.length));
    let keyChars = dublicatedKey.toUpperCase().split("");
    let index = 0;
    let readyString = [];

    for (let i = 0; i < messageChars.length; i++) {
      if (
        messageChars[i].charCodeAt() > 90 ||
        messageChars[i].charCodeAt() < 65
      ) {
        continue;
      } else {
        messageChars[i] = messageChars[i].charCodeAt() - 65;
      }
    }

    let keyCode = keyChars.map((item) => item.charCodeAt() - 65);

    for (let i = 0; i < messageChars.length; i++) {
      if (typeof messageChars[i] == "number") {
        res.push((messageChars[i] + keyCode[index]) % 26);
        index++;
      } else {
        res.push(messageChars[i]);
      }
    }

    for (let i = 0; i < res.length; i++) {
      if (typeof res[i] == "number") {
        readyString.push(String.fromCharCode(res[i] + 65));
      } else {
        readyString.push(res[i]);
      }
    }

    if (this.direct) {
      return readyString.join("");
    } else {
      return readyString.reverse().join("");
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    let res = [];
    let messageChars = message.toUpperCase().split("");
    let dublicatedKey = key.repeat(Math.ceil(message.length / key.length));
    let keyChars = dublicatedKey.toUpperCase().split("");
    let index = 0;
    let readyString = [];

    for (let i = 0; i < messageChars.length; i++) {
      if (
        messageChars[i].charCodeAt() > 90 ||
        messageChars[i].charCodeAt() < 65
      ) {
        continue;
      } else {
        messageChars[i] = messageChars[i].charCodeAt() - 65;
      }
    }

    let keyCode = keyChars.map((item) => item.charCodeAt() - 65);

    for (let i = 0; i < messageChars.length; i++) {
      if (
        typeof messageChars[i] == "number" &&
        (messageChars[i] - keyCode[index]) % 26 >= 0
      ) {
        res.push((messageChars[i] - keyCode[index]) % 26);
        index++;
      } else if (
        typeof messageChars[i] == "number" &&
        (messageChars[i] - keyCode[index]) % 26 < 0
      ) {
        res.push(((messageChars[i] - keyCode[index]) % 26) + 26);
        index++;
      } else {
        res.push(messageChars[i]);
      }
    }

    for (let i = 0; i < res.length; i++) {
      if (typeof res[i] == "number") {
        readyString.push(String.fromCharCode(res[i] + 65));
      } else {
        readyString.push(res[i]);
      }
    }

    if (this.direct) {
      return readyString.join("");
    } else {
      return readyString.reverse().join("");
    }
  }
};
