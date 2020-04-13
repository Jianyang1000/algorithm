class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(this.root === null){
            this.root = node
            return
        }
        let pre = this.getPrev(value)
        if(value < pre.value){
            pre.left = node
        }else {
            pre.right = node
        }
    }
    remove(){

    }
    find(value){
        let current = this.root
        while(current.value !== value && current !== null){
            if(value < current.value){
                current = current.left
            }else {
                current = current.right
            }
        }
        return current === null ? -1 : current
    }
    prePrint(current){
        if(current === null) return
        console.log(current.value)
        this.prePrint(current.left)
        this.prePrint(current.right)
    }
    inPrint(current){
        if(current === null) return
        this.inPrint(current.left)
        console.log(current.value)
        this.inPrint(current.right)
    }
    postPrint(current){
        if(current === null) return
        this.postPrint(current.left)
        this.postPrint(current.right)
        console.log(current.value)
    }
    getPrev(value){
        let current = this.root
        let prev
        while(current !== null){
            if(value < current.value){
                prev = current
                current = current.left
            }else{
                prev = current
                current = current.right
            }
        }
        return prev
    }
}


let tree = new Tree()
tree.insert(8)
tree.insert(5)
tree.insert(13)
tree.insert(3)
tree.insert(7)

tree.inPrint(tree.root)
console.log('------')
tree.prePrint(tree.root)
console.log('------')
tree.postPrint(tree.root)
console.log('------')
console.log(tree.find(5))
console.log('------')
console.log(tree.getPrev(5))