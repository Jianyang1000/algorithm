// 跟第七题一模一样

var isPalindrome = function(x) {
    let reverse = +(x+'').split('').reverse().join('')
    return reverse === x ? true : false
};



// O(logn)

var isPalindrome = function(x){
    // 还可以再加一个条件筛选值，但是在leetcode中，每个数都要再比较两次，时间反而耗费的多
    // x % 10 === 0 && x !== 0
    if(x < 0){
        return false
    }

    let result = 0
    while(temp >= 1){
        result = result * 10 + Math.floor(temp%10)
        temp /= 10
    }
    
    return (result === x) ? true : false
}

console.log(isPalindrome(-121))