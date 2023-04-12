const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  let result = 0;
  arrS2.forEach(e => { 
    if (arrS1.includes(e)) {
      result += 1;
      arrS1.splice(arrS1.indexOf(e), 1);
    }
  })
  return result;
}

module.exports = {
  getCommonCharacterCount
};
