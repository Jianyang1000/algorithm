var MinStack = function() {
    this.stack = []
    this.min_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(this.min_stack.length === 0 || x <= this.min_stack[this.min_stack.length - 1]){
        this.min_stack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.pop() === this.min_stack[this.min_stack.length - 1]){
        this.min_stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length === 0) return null
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1]
};

// ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
// [[],[2],[0],[3],[0],[],[],[],[],[],[],[]]

let minStack = new MinStack();
minStack.push(2)
minStack.push(0)
minStack.push(3)
minStack.push(0)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())
