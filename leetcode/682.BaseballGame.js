// 过一遍数组就可以了 O(n)



var calPoints = function(ops) {
    let stack = []
    let res = 0
    for(let i = 0;i < ops.length;i++){
        if(ops[i] === 'C'){
            res -= stack[stack.length - 1]
            stack.pop()
        }else if(ops[i] === 'D'){
            res += stack[stack.length - 1] * 2
            stack.push(stack[stack.length - 1] * 2)
        }else if(ops[i] === '+'){
            res += stack[stack.length - 1] + stack[stack.length - 2]
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }else {
            res += +ops[i]
            stack.push(+ops[i])
        }
    }
    return res
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))