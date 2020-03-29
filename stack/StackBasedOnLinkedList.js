class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }
    push(item){
        let newNode = new Node(item)
        if(this.top === null)
        {
            this.top = newNode
        }
        else {
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop(){
        if(this.top === null){
            return -1
        }
        else{
            let temp = this.top
            this.top = this.top.next
            return temp
        }
    }
    clear(){
        this.top = null
    }
    display(){
        let currentNode = this.top
        while(currentNode !== null){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
}

function match(value){
    let stack = new Stack()
    let right = [')',']','}']
    let left = ['(','[','{']
    let i = 0
    while(i < value.length){
        let leftOperator = left.some((operator) => {
            return operator === value[i]
        })
        if(leftOperator){
            stack.push(value[i])
        }
        else {
            let pop = stack.pop().data
            if(!((pop === '(' && value[i] === ')') || (pop === '[' && value[i] === ']') || (pop === '{' && value[i] === '}'))){
                return -1
            }
        }
        i += 1
    }
    return stack.top === null ? 1 : -1
}




// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.top)
// stack.display()

// console.log(match('[[{{}}]]'))

exports.CreatedStack = Stack