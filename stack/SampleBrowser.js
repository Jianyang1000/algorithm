const stack = require('./StackBasedOnLinkedList')
class SampleBrowser{
    constructor(){
        this.normalStack = new stack.CreatedStack()
        this.backStack = new stack.CreatedStack()
    }
    pushNormal(item){
        this.normalStack.push(item)
        this.backStack.clear()
    }
    back(){
        let popNode = this.normalStack.pop()
        this.backStack.push(popNode.data)
    }
    front(){
        let popNode = this.backStack.pop()
        this.normalStack.push(popNode.data)
    }
    displayAllStack(){
        console.log('----后退栈----')
        this.normalStack.display()
        console.log('----前进栈----')
        this.backStack.display()
    }
}


let browser = new SampleBrowser()
browser.pushNormal('google')
browser.pushNormal('baidu')
browser.pushNormal('youtube')
browser.pushNormal('cn.bing')
browser.pushNormal('geektime')
browser.front()
browser.displayAllStack()