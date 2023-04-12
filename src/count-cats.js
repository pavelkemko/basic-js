const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if(matrix === null || matrix === undefined) {
    return 0;
  }
  for (let i=0; i<matrix.length; i++) {
    matrix[i].forEach(e => e === '^^' ? count += 1 : count || 0);
  }
  return count;
}

module.exports = {
  countCats
};
