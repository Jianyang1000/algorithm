let map = new Map()
var climbStairs = function(n) {
    if(n === 1 || n === 0) return 1
    if(map.has(n)){
        return map.get(n)   
    }
    let result = climbStairs(n - 1) + climbStairs(n - 2)
    map.set(n,result)
    return result
};
climbStairs(20)
console.log(map)