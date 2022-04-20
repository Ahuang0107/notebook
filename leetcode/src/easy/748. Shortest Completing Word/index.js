/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
export const shortestCompletingWord = function (licensePlate, words) {
  const cnt = new Array(26).fill(0);
  for (const license of licensePlate) {
    if (/^[a-zA-Z]+$/.test(license)) {
      ++cnt[license.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]
    }
  }
  let idx = -1;
  for (let i = 0; i < words.length; i++) {
    const c = new Array(26).fill(0);
    for (const char of words[i]) {
      ++c[char.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    let ok = true;
    for (let j = 0; j < 26; j++) {
      if (c[j] < cnt[j]) {
        ok = false;
        break;
      }
    }
    if (ok && (idx < 0 || words[i].length < words[idx].length)) {
      idx = i
    }
  }
  return words[idx]
};
