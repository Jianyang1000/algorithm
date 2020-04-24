class Node {
    constructor(element){
        this.data = element
        this.next = null
    }
}


class LinkList {
    constructor(){
        this.head = new Node('head')
    }
    findByValue(item){
        let currentElement = this.head
        while(currentElement && currentElement.data !== item){
            currentElement = currentElement.next
        }
        return currentElement ? currentElement : -1;
    }
    findByIndex(index){
        let i = 0;
        let currentElement = this.head
        while(i < index){
            currentElement = currentElement.next
            i++
        }
        return currentElement
    }
    append(element){
        const newElement = new Node(element)
        let currentElement = this.head
        while(currentElement.next !== null){
            currentElement  = currentElement.next
        }
        currentElement.next = newElement
    }
    insert(newElement,element){
        const oldNode = this.findByValue(element)
        if(oldNode === -1){
            return -1
        }
        const newNode = new Node(newElement)
        newNode.next = oldNode.next
        oldNode.next = newNode
        return newNode
    }
    findPrev(item){
        let currentNode = this.head
        while(currentNode.next && (currentNode.next.data !== item)){
            currentNode = currentNode.next
        }
        if(currentNode.next === null){
            return -1
        }
        return currentNode
    }
    remove(item){
        let prevNode = this.findPrev(item)
        const temp = prevNode.next
        if(prevNode === -1){
            return -1
        }
        prevNode.next = prevNode.next.next
        return temp
    }
    display(){
        let currentNode = this.head
        while(currentNode !== null){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    insertHead(item){
        const newNode = new Node(item)
        newNode.next = this.head.next
        this.head.next = newNode
    }
    count(){
        let currentNode = this.head
        let count = 0
        while(currentNode.next !== null) {
            count += 1
            currentNode = currentNode.next
        }
        return count
    }
    reverse(){
        let currentNode = this.head
        let newlinklist = new LinkList()
        while(currentNode.next !== null){
            currentNode = currentNode.next
            newlinklist.insertHead(currentNode.data)
        }
        return newlinklist
    }
    checkCircle(){
        let currentNode = this.head.next
        let nodeList = []
        let n = 0;
        while(currentNode !== null){
            let sameNode = nodeList.filter((node) =>　{
                return node === currentNode
            })
            if(sameNode.length !== 0){
                return 1
            }
            nodeList.push(currentNode)
            currentNode = currentNode.next
        }
        return -1
    }
    makeCircle(item){
        let currentNode = this.head
        while(currentNode.next !== null){
            currentNode = currentNode.next
        }
        currentNode.next = this.head.next 
    }
    // 时间复杂度 n+m
    merge(linklistB){
        let currentANode = this.head.next
        let currentBNode = linklistB.head.next
        let newlinklist = new LinkList()
        while(currentANode && currentBNode){
            if(currentANode.data > currentBNode.data){
                newlinklist.append(currentBNode)
                currentBNode = currentBNode.next
            }else {
                newlinklist.append(currentANode)
                currentANode = currentANode.next
            }
        }
        if(currentANode === null){
            while(currentBNode){
                newlinklist.append(currentBNode)
                currentBNode = currentBNode.next
            }
        }else {
            while(currentANode){
                newlinklist.append(currentANode)
                currentANode = currentANode.next
            }
        }
        return newlinklist
    }
    removeByIndexFromEnd(index){
        if(this.checkCircle() === 1) return false
        const count = this.count()
        let currentNode = this.head.next
        let pos = 1
        while(currentNode.next && pos < count - index + 1){
            currentNode = currentNode.next
            ++pos;
        }
        this.remove(currentNode.data)
    }
    findMiddleNode(){
        const count = this.count()
        const middle = Math.ceil(count/2)
        let pos = 1
        let currentNode = this.head.next

        if(count % 2 === 0){
            let nodeList = []
            while(pos < middle){
                currentNode = currentNode.next
                ++pos
            }
            nodeList.push(currentNode)
            nodeList.push(currentNode.next)
            return nodeList
        }
        else {
            while(pos < middle){
                currentNode = currentNode.next
                ++pos
            }
            return currentNode
        }
    }
}


// append 时间复杂度n
class LRU{
    constructor(count){
        this.linklist = new LinkList()
        this.count = count
    }
    append(item){
        const nodeCount = this.linklist.count()
        if(nodeCount < this.count){
            this.linklist.append(item)
        }
        else {
            this.isFull(item)
        }
    }
    isFull(item){
        let removeNode = this.linklist.remove(item)
        if(removeNode === -1){
            this.linklist.append(item)
            this.linklist.remove(this.linklist.head.next.data)
        }
        else {
            this.linklist.append(temp.data)
        }
    }
    display(){
        this.linklist.display()
    }
}


// const LRUList = new LRU(3)
// LRUList.append(3)
// LRUList.append(4)
// LRUList.append(7)
// LRUList.append(6)
// LRUList.append(5)
// LRUList.append(8)
// LRUList.display()

// const linklist = new LinkList()
// linklist.append(1)
// linklist.append(6)
// linklist.append(7)
// linklist.append(8)

// console.log('----------------')
// linklist.makeCircle()
// console.log(linklist.checkCircle())

// const linklistB = new LinkList()
// linklistB.append(2)
// linklistB.append(5)
// linklistB.append(8)
// linklistB.append(9)
// console.log(linklist.merge(linklistB))

// linklist.removeByIndexFromEnd(2)
// linklist.display()


// console.log(linklist.findMiddleNode())


exports.LinkList = LinkList