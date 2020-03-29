class Node{
    constructor(item){
        this.data = item
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }
    enqueue(item){
        if(this.head === null){
            this.head = new Node(item)
            this.tail = this.head
        }else {
            this.tail.next = new Node(item)
            this.tail = this.tail.next
        }
        
    }
    dequeue(item){
        if(this.head === null){
            return -1   
        }
        const temp = this.head.data
        this.head = this.head.next
        return temp
    }
}