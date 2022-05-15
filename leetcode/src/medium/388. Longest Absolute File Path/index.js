/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const n = input.length;
  let index = 0;
  const stack = [];
  let max = 0;

  while (index < n) {
    let depth = 0;
    while (index < n && input[index] === '\t') {
      index++;
      depth++;
    }
    let cur = 0;
    let is_file = false;
    while (index < n && input[index] !== '\n') {
      index++;
      cur++;
      if (input[index] === '.') {
        is_file = true;
      }
    }

    while (stack.length > depth) {
      stack.pop();
    }
    if (stack.length > 0) {
      // 这里加一是因为结果是用/分隔的，所以每次加上父目录的长度时，都要算上/的长度
      cur += stack[stack.length - 1] + 1;
    }
    if (is_file) {
      max = Math.max(max, cur);
    }
    stack.push(cur);
    index++;
  }
  return max;
};

export {
  lengthLongestPath
}
