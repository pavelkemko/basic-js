const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if(!arr.length) {
    return arr;
  }
  let newArr = [...arr];
  newArr.forEach((elem, i) => {
    if (elem === '--discard-next') {
      newArr[i] = '-';
      newArr[i+1] = '-';
    }
    if (elem === '--discard-prev') {
      newArr[i] = '-';
      newArr[i-1] = '-';
    }
    if (elem === '--double-next') {
      newArr[i] = newArr[i+1];
    }
    if (elem === '--double-prev') {
      newArr[i] = newArr[i-1];
    }
  })
  return newArr.filter(e => e !== '-' && e !== undefined);
}

module.exports = {
  transform
};
