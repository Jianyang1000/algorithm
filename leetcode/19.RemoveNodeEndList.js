let LinkList = require('../linklist/linklist')
LinkList = LinkList.LinkList

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function (head, n) {
    let temp = head
    let count = 0
    while (temp !== null) {
        temp = temp.next
        count++
    }
    temp = head
    for (let i = 0; i < count - n - 1; i++) {
        temp = temp.next
    }
    if (n === count) {
        head = head.next
    } else {
        temp.next = temp.next.next
    }
    return head
}


var removeNthFromEnd2 = function (head, n) {
    let fast = head
    let slow = head
    let n2 = n
    while(fast !== null){
        if(n < 0) slow = slow.next
        --n
        fast = fast.next
    }
    if(n === 0){
        return head.next
    }
    slow.next = slow.next.next
    return head
}



let linklist = new LinkList()
linklist.append(1)
linklist.append(2)
console.log(removeNthFromEnd2(linklist.head, 1))