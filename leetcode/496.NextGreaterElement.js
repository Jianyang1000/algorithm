var nextGreaterElement = function(nums1,nums2) {
    let res = []
    let hashmap = new Map()
    for(let i = 0;i < nums2.length;i++){
        hashmap.set(nums2[i],i)
    }
    for(let i = 0;i < nums1.length;i++){
        let j = hashmap.get(nums1[i])
        let flag = false
        for(j + 1;j < nums2.length;j++){
            if(nums2[j] > nums1[i]){
                res.push(nums2[j])
                flag = true
                break;
            }
        }
        if(!flag){
            res.push(-1)
        }
        flag = false
    }
    return res
};


console.log(nextGreaterElement([2,4],[1,2,3,4]))


