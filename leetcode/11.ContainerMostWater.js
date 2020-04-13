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

var maxArea2 = function(height) {
    let largest = 0
    for(let i = 0;i < height.length -1;i++){
        for(let j = i + 1;j < height.length;j++){
            largest = Math.max(largest,Math.min(height[i],height[j]) * (j - i))
        }
    }
    return largest
};