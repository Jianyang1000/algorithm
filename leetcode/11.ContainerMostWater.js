// O(n²)
var maxArea = function(height) {
    let largest = 0
    for(let i = 0;i < height.length -1;i++){
        for(let j = i + 1;j < height.length;j++){
            largest = Math.max(largest,Math.min(height[i],height[j]) * (j - i))
        }
    }
    return largest
};




// Two Pointer Approach
// O(n) 想出的答案和题解一样 哈哈
var maxArea2 = function(height) {
    let i = 0, j = height.length - 1
    let largest = 0
    while(i !== j){
        largest = Math.max(Math.min(height[i],height[j])*(j-i),largest)
        if(height[i] < height[j]){
            i += 1
        }else {
            j -= 1
        }
    }
    
    return largest
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea2([1,8,6,2,5,4,8,3,7]))