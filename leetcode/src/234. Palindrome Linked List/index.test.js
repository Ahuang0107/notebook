import {isPalindrome, ListNode} from "./index";

describe('', () => {
  test('', () => {
    const head = new ListNode(1,
      new ListNode(2,
        new ListNode(2,
          new ListNode(1, null)
        )
      )
    )
    expect(isPalindrome(head)).toEqual(true)
  })
  test('', () => {
    const head = new ListNode(1,
      new ListNode(2, null)
    )
    expect(isPalindrome(head)).toEqual(false)
  })
})
