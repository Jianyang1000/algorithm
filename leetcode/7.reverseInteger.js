// 取巧方法，将数字直接变成字符串后反转 O(n) => O(reverse())

var reverse = function(x) {
    if(overflowsNumber(x)){
        return 0
    }
    let flag = x >= 0 ? 1 : -1
    let reverse = +(Math.abs(x)+'').split('').reverse().join('')
    return overflowsNumber(reverse) ? 0 : flag * reverse
};

// O(logn)
var reverse2 = function(x){
    if(overflowsNumber(x)){
        return 0
    }
    let flag = x >= 0 ? 1 : -1
    let temp = Math.abs(x)
    let result = 0
    while(temp >= 1){
        result = result * 10 + Math.floor(temp%10)
        temp /= 10
    }
    
    return overflowsNumber(result) ? 0 : flag * result
}



var overflowsNumber = function(x){
    if(x >= Math.pow(2,31)-1 || x <= -1 * Math.pow(2,31)){
        return true
    }
    return false
}


console.log(reverse(-123))
console.log(reverse2(-123))

