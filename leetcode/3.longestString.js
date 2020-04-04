// n³
var lengthOfLongestSubstring = function(s) {
    let length = s.length
    let longest = 0
    let temp = 0
    let array = []
    for(let i = 0;i < length;i++){
        for(let j = i;j < length;j++){
            
            let flag = array.every((item) => {
                return item !== s[j]
            })
            
            if(flag){
                array.push(s[j])
                temp += 1
                longest = temp > longest ? temp : longest
            }else {
                array = []
                longest = temp > longest ? temp : longest
                temp = 0
                break
            }
        }
    }
    return longest
};

// n² 用indexOf代替遍历
var lengthOfLongestSubstring1 = function(s) {
    let length = s.length
    let longest = 0
    let temp = 0
    let array = []
    for(let i = 0;i < length;i++){
        for(let j = i;j < length;j++){
            
            let flag = array.indexOf(s[j])
            if(flag === -1){
                array.push(s[j])
                temp += 1
                longest = Math.max(longest,temp)
            }else {
                array = []
                temp = 0
                break
            }
        }
    }
    return longest
};


// slide window
// 跟着代码走一遍就能明白原理
var lengthOfLongestSubstring2 = function(s) {
    let longest = 0
    let i = 0,j = 0
    let set = new Set()
    let n = s.length
    while(i < n && j < n){
        if(!set.has(s[j])){
            set.add(s[j++])
            longest = Math.max(longest,j - i)
        }else {
            set.delete(s[i++])
        }
    }
    return longest
}


console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring1('abcabcbb'))
console.log(lengthOfLongestSubstring2('pwwkew'))