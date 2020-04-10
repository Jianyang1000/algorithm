// sort的复杂度，sort数据规模小是插入排序、数据规模大是快排 所以O(n² ~ nlogn)
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2)
    nums.sort((a,b) => {
        return a - b
    })
    let length = nums.length
    if(nums.length % 2 === 0){
        return (nums[length/2 - 1] + nums[length/2])/2
    }else {
        return nums[Math.floor(length/2)]
    }
};


// O(min(m,n))
var findMedianSortedArrays2 = function(nums1, nums2) {
    let i = 0,j = 0
    let nums = []
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            nums.push(nums1[i])
            i += 1
        } else {
            nums.push(nums2[j])
            j += 1
        }
    }

    nums = nums1[i] ? nums.concat(nums1.slice(i)) : nums.concat(nums2.slice(j))
    let length = nums.length
    return nums.length % 2 === 0 ? (nums[length/2 - 1] + nums[length/2])/2 : nums[Math.floor(length/2)]
   
};