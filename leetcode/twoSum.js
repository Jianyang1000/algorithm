/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 用Map存数据，这样查找的时间复杂度为O(1)
var twoSum = function(nums, target) {
    
    let hashMap = new Map()
    for(let i = 0;i < nums.length;i++){
        hashMap.set(nums[i],i)
    }
    for(let i = 0;i < nums.length;i++){
        let complement = target - nums[i]
        if(hashMap.has(complement) && hashMap.get(complement) !== i){
            return [i,hashMap.get(complement)]
        }
    }
};


// 因为第二个数在的时候，第一个数一定在，所以可以这样写
var twoSum2 = function(nums, target) {
    
    let hashMap = new Map()
    
    for(let i = 0;i < nums.length;i++){
        let complement = target - nums[i]
        if(hashMap.has(complement) && hashMap.get(complement) !== i){
            return [i,hashMap.get(complement)]
        }
        hashMap.set(nums[i],i)
    }
};


console.log(twoSum([2,7,11,15],9))