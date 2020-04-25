var middleNode = function(head) {
    let fast = head
    let slow = head
    while(slow.next && fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};