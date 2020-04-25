// 快慢指针

var hasCycle = function(head) {
    if(!head) return false
    let fast = head
    let slow = head
    
    while(slow.next && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow){
            return true
        }
    }
    return false
};