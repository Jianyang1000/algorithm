var MyQueue = function() {
    this.stack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let stack2 = this.stack.slice()
    this.stack = []
    this.stack.push(x)
    this.stack = this.stack.concat(stack2)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};


let queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.stack()
queue.peek()
queue.pop()
queue.empty()



