var threeSum = function(nums) {
    if(nums.length < 3) return []
    nums.sort((a,b) => {return a - b})
    let length = nums.length
    let array = []
    for(let i = 0;i < length;i++){
        for(let j = i + 1;j < length - 1;j++){
            let num = nums[i] + nums[j]
            let newArray = nums.slice(j+1)
            let index = nums.slice(j+1).indexOf(-num)
            if(index !== -1){
                array.push([nums[i],nums[j],newArray[index]])
            }
        }
        while(nums[i] === nums[i + 1]){
            i += 1
        }        
    }
    return isUnique(array)

};

// O(n)
var isUnique = function(array){
    let map = new Map()
    let a = []
    if(array.length === 0) return []
    for(let i = 0;i < array.length;i++){
        if(!map.has(array[i].join(''))){
            map.set(array[i].join(''),array[i])
        }
    }
    for(let item of map.values()){
        a.push(item)
    }
    return a
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

