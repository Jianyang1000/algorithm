class Queue{
    constructor(opacity){
        this.queue = []
        this.opacity = opacity
        this.head = 0
        this.tail = 0
    }
    enqueue(item){
        if(this.tail > this.opacity && this.head !== 0){
            for(let i = 0;i < this.tail - this.head + 1;i++)
            {
                this.queue[i] = this.queue[this.head + i]
            }
            
            this.tail = this.tail - this.head
            this.queue[this.tail] = item
            this.tail++
            this.head = 0
        }else {
            this.queue[this.tail] = item
            this.tail++
        }
    }
    dequeue(){
        if(this.head === this.tail){
            return -1
        }
        const result = this.queue[this.head]
        this.head++
        return result
    }
    display(){
        let temp = this.head
        while(temp < this.tail){
            console.log(this.queue[temp])
            temp++
        }
    }
}

const queue = new Queue(4)
queue.en(1)
queue.en(2)
queue.en(3)
queue.qu()
queue.en(4)
queue.en(5)
queue.en(6)


console.log('-----------')
queue.display()