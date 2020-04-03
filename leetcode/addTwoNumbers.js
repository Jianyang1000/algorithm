function ListNode(val) {
    this.value = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// 这回我明白了写"哨岗"的重要作用，能让代码逻辑清晰许多许多
// 这题还有一个地方，就是当有一个链表走到null的时候，假设他的值为0
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let currentNode = head
    let carry = 0
    let p = l1,q = l2
    while(p !== null || q !== null){
        let x = (p !== null) ? p.val : 0
        let y = (q !== null) ? q.val : 0
        let sum = x + y + carry
        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        currentNode.next = newNode
        currentNode = currentNode.next
        if(q !== null) q = q.next
        if(p !== null) p = p.next
    }
    if(carry > 0){
        currentNode.next = new ListNode(1)
    }
    
    return head.next
};


// 递归写法
var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
    }
    return node
};




let list1 = new ListNode(2)
let listA = list1
list1.next = new ListNode(4)
list1 = list1.next
list1.next = new ListNode(3)

let list2 = new ListNode(5)
let listB = list2
list2.next = new ListNode(6)
list2 = list2.next
list2.next = new ListNode(4)

console.log(addTwoNumbers(listA,listB))