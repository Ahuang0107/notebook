import {isNStraightHand} from "./index";

describe('', () => {
  test('', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3
    expect(isNStraightHand(hand, groupSize)).toEqual(true)
  })

  test('', () => {
    const hand = [1, 2, 3, 4, 5], groupSize = 4
    expect(isNStraightHand(hand, groupSize)).toEqual(false)
  })

  test('', () => {
    const hand = [8, 10, 12], groupSize = 3
    expect(isNStraightHand(hand, groupSize)).toEqual(false)
  })
})
