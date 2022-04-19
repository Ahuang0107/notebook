/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const cnt = new Array(26).fill(0);
  for (const c of magazine) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (const c of ransomNote) {
    const current = --cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (current < 0) {
      return false;
    }
  }
  return true;
};
