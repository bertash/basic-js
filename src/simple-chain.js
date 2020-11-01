const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof(position) == 'number' && position > 0 && Number.isInteger(position) == true && position <= this.chain.length) {
      this.chain.splice(position-1,1);
      return this;
      
    } 
    this.chain = [];
    throw new Error();
    
    
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};


module.exports = chainMaker;
