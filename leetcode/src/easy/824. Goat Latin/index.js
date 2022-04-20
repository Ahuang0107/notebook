/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const res = new Array(arr.length);
  arr.forEach((word, index) => {
    const end = new Array(index + 1).fill('a').join('');
    if (vowels.includes(word[0].toLowerCase())) {
      res[index] = word + 'ma' + end;
    } else {
      res[index] = word.slice(1) + word[0] + 'ma' + end;
    }
  })
  return res.join(' ');
};
export {
  toGoatLatin
}
