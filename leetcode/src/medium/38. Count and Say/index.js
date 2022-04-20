/**
 * @param {number} n
 * @return {string}
 */
export const countAndSay = function (n) {
  let list = ["1"]
  for (let i = 1; i < n; i++) {
    const newList = []
    let string = list[0]
    for (let j = 1; j < list.length; j++) {
      if (string.slice(0, 1) === list[j]) {
        string += list[j]
      } else {
        newList.push(string.length.toString(), string.slice(0, 1))
        string = list[j]
      }
    }
    newList.push(string.length.toString(), string.slice(0, 1))
    list = newList
  }
  return list.join("")
};
