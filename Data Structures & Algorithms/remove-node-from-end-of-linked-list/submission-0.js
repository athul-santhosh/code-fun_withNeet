/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


/*

1 - 2 - 3 - 4 - null

n = 2

1 - 2 - 4 - null



5 - null

n = 1


null


n <= size of elements  :: Correct;


2 pointers

n = 3;
// set from 0 , f.next -> null
count = 0. 


n = 2
c =1

s.next = null;

return f;

n =3
c = 3


s.          f
1 - 2 -3 - null


if f.next == null;

if count == n-1 {
    tem = s.next;
    s.next = null;
    return temp;
}




*/


class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let first = head;
        let second = head; 

        let count = 0;
        let temp  = head;

        while (first.next !== null) {
            first = first.next;
            count++;
            if (count > n) {
                second = second.next;
            }
        }

        if (count === n-1) {
            temp = second.next;
            second.next = null;
            return temp;
        }

        second.next = second.next.next;

        return temp;


    }
}
