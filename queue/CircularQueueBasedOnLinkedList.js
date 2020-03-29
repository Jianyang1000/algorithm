class CircularQueue {
    constructor(size) {
        this.head = 0
        this.tail = 0
        this.size = size
        this.queue = []
    }
    enqueue(item) {
        if ((this.tail + 1) % this.size === this.head) {
            return -1
        }
        this.queue[this.tail] = item
        this.tail = (this.tail + 1) % this.size
    }
    dequeue() {
        if (this.head === this.tail) {
            return -1
        } else {
            let temp = this.queue[this.head]
            this.head = (this.head + 1) % this.size
            return temp
        }
    }
    display(){
        let temp = this.head
        while(temp !== this.tail){
            console.log(this.queue[temp])
            temp = (temp + 1) % this.size
        }
    }
}

let queue = new CircularQueue(4)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.enqueue(4))

console.log('-------------')
// console.log(queue.head)
// console.log(queue.tail)
queue.display()