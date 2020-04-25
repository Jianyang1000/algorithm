// 时间复杂度O(min(m,n))

var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(0)
    let head = l3
    while(l1 && l2){
        if(l1.val > l2.val){
            l3.next = l2
            l2 = l2.next
        } else {
            l3.next = l1
            l1 = l1.next
        }
        l3 = l3.next
    }
    l3.next = l1 ? l1 : l2
    return head.next
};