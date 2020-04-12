// 暴力解法 O(n³)，在leetcode显示超时，本地可以

var longestPalindrome = function(s) {
    let largest = ''
    let newString = ''
    let flag = false
    if(s.length > 1000){
        return
    }
    for(let i =0;i < s.length;i++){
        for(let j = i;j < s.length;j++){
            newString = s.slice(i,j+1)
            flag = checkPalindrome(newString)
            if(flag === 1){
                largest = (j - i + 1) > largest.length ? newString : largest;
            }
        }
    }
    return largest
};


// common string
// 与BF差不太多，不用每次都比较回文字符串  但是在一大段字符串都是回文的情况下，复杂度直线升高于BF，应该可以剪枝

var longestPalindrome2 = function(s) {
    let str = s.split('').reverse().join('')
    let length = s.length
    let next = 0
    let longest = ''
    for(let i = 0;i < length;i++){
        for(let j = 0;j < length;j++){
            if(s[i] === str[j]){
                while(s[i+next] === str[j+next] && i+next < length && j+next < length){
                    next += 1
                }
                
                let palindrome = s.slice(i,i+next)
                next = 0;
                if(checkPalindrome(palindrome) === 1){
                    longest = longest.length > palindrome.length ? longest : palindrome
                }
            }
        }
    }
    return longest
};


var checkPalindrome = function(s){
    let reverse = s.split('').reverse().join('')
    return reverse === s ? 1 : -1
}

// Expand Around Center O(n²)

var longestPalindrome3 = function(s){
    let start = 0
    let end = 0
    for(let i = 0;i < s.length;i++){
        let len1 = expandAroundCenter(s,i,i)
        let len2 = expandAroundCenter(s,i,i+1)
        let len = Math.max(len1,len2)
        if(len > end - start){
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2) + 1
        }
    }
    return s.slice(start,end)
}


var expandAroundCenter = function(s,left,right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }
    return right - left - 1
}








let time1 = new Date()
console.log(longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"))
let time2 = new Date()


let time3 = new Date()
console.log(longestPalindrome2("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"))
let time4 = new Date()

let time5 = new Date()
console.log(longestPalindrome3("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"))
let time6 = new Date()


console.log('method1',time2 - time1)
console.log('method2',time4 - time3)
console.log('method3',time6 - time5)