/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const n = input.length;
  let pos = 0;
  const stack = [];
  let ans = 0;

  while (pos < n) {
    let depth = 1;
    while (pos < n && input[pos] === '\t') {
      pos++;
      depth++;
    }
    let isFile = false;
    let len = 0;
    while (pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true;
      }
      len++;
      pos++;
    }

    while (stack.length >= depth) {
      stack.pop();
    }
    if (stack.length > 0) {
      len += stack[stack.length - 1] + 1;
    }
    if (isFile) {
      ans = Math.max(ans, len);
    } else {
      stack.push(len);
    }

    pos++;
  }
  return ans;
};

export {
  lengthLongestPath
}
