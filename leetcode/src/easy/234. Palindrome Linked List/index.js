export function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome = function (head) {
  let point = head
  const list = []
  while (point.next != null) {
    list.push(point.val)
    point = point.next
  }
  list.push(point.val)

  while (list.length > 1) {
    if (list.shift() != list.pop()) return false
  }
  return true
};
