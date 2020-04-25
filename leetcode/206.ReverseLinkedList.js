// 迭代
var reverseList = function (head) {
    let prev = null
    while (head !== null) {
        let nextNode = head.next
        head.next = prev
        prev = head
        head = nextNode
    }
    return prev
};


// 递归
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let cur = reverseList(head.next);
    
    head.next.next = head;
    //防止链表循环，需要将head.next设置为空
    head.next = null;
    //每层递归函数都返回cur，也就是最后一个节点
    return cur;

};