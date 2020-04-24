// let hashmap = new Map()
// hashmap.set('2','abc')
// hashmap.set('3','def')
// hashmap.set('4','ghi')
// hashmap.set('5','jkl')
// hashmap.set('6','mno')
// hashmap.set('7','pqrs')
// hashmap.set('8','tuv')
// hashmap.set('9','wxyz')
// var letterCombinations = function(digits) {
//     let numberArray = digits.split('')
//     let res = []
//     let a = hashmap.get(numberArray[0])
//     let b = hashmap.get(numberArray[1])
//     for(let i = 0;i < a.length;i++){
//         for(let j = 0;j < b.length;j++){
//             res.push(a[i]+b[j])
//         }
//     }
//     return res
// };






var letterCombinations = function(digits) {
    if(digits.length == 0) return [];
      const phone = {
     '2': ['a', 'b', 'c'],
     '3': ['d', 'e', 'f'],
     '4': ['g', 'h', 'i'],
     '5': ['j', 'k', 'l'],
     '6': ['m', 'n', 'o'],
     '7': ['p', 'q', 'r', 's'],
     '8': ['t', 'u', 'v'],
     '9': ['w', 'x', 'y', 'z']
   };
   
   let output = [];
   
   function backtrack(combination, nums){
     if(nums.length == 0) output.push(combination);
     else {
       let n = nums.slice(0, 1);
       let letters = phone[n];
       for(let i in letters){
         let letter = letters[i]
         backtrack(combination + letter, nums.slice(1))
       }
     }
   }
 
   if(digits.length != 0){
     backtrack('', digits);
     return output;
   }
 }

 console.log(letterCombinations('254'))