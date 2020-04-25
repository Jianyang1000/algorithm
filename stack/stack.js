// 20,155,844,682,496,232,224


class Stack{
    constructor(){
        this.stack = []
        this.top = 0
    }
    push(item){
        let top = this.top
        this.stack[top] = item
        this.top += 1
    }
    pop(){
        this.top -= 1
    }
    clear(){
        this.top = 0
    }
    display(){
        let i = 0
        let top = this.top
        while(i < top){
            console.log(this.stack[i])
            i += 1
        }
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.display()