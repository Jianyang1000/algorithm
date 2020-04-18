var threeSum = function(nums) {
    nums.sort((a,b) => {return a - b})
    let length = nums.length
    let array = []
    for(let i = 0;i < length;i++){
        console.log(i)
        for(let j = i + 1;j < length - 1;j++){
            console.log(j)
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
    

    return array
};

console.log(threeSum([0,0,0,0,0]))

