const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  
  let separator = options.separator || '+';
  let addSeparator = options.additionSeparator || '|';
  let addition = options.addition;
  let repeat = options.repeatTimes || 1;
  let addRepeat = options.additionRepeatTimes;
  
  for (let i=1; i<=repeat; i++) {
    let additionArr = [];
    if(!addRepeat && addition) {
      additionArr.push(String(addition));
    } else {
      for(let k=1; k<=addRepeat; k++) {
        additionArr.push(String(addition));
      }
    } 
    result.push(`${str}${additionArr.join(addSeparator)}`);
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
