/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
export const isNStraightHand = function (hand, groupSize) {
  const handLength = hand.length;
  if (handLength % groupSize !== 0) {
    return false;
  }

  hand.sort((a, b) => a - b);
  const map = new Map();
  hand.forEach(value => {
    map.set(value, (map.get(value) || 0) + 1);
  })


  for (const x of hand) {
    if (!map.get(x) > 0) {
      continue;
    }
    for (let j = 0; j < groupSize; j++) {
      if (!map.get(x + j) > 0) {
        return false;
      }
      map.set(x + j, map.get(x + j) - 1)
    }
  }
  return true;
};
