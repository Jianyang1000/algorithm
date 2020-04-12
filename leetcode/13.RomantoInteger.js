// 最初版 利用栈进行表达式求值 O(n)

const hashmap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};



var romanToInt = function(s) {
    let stack = []
    let result = 0
    for(let i = 0;i < s.length;i++){
        let lastItem = stack[stack.length - 1]
        if(stack.length === 0 || hashmap[s[i]] <= hashmap[lastItem]){
            stack.push(s[i])
        }
        else if(hashmap[s[i]] > hashmap[lastItem]){
            result += hashmap[s[i]] - hashmap[stack.pop()]
        }
    }
    
    while(stack.length > 0){
        result += hashmap[stack.pop()]
    }
    
    return result
};


// O(n)  JS的解法在这道题就很慢，这个可能就是跟JS这门语言有关系了

const hashmap2 = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};



var romanToInt2 = function(s) {
    let i = 0
    let sum = 0
    
    while(i < s.length){
        const cur = hashmap2[s[i]]
        const next = hashmap2[s[i + 1]]
        if(next > cur)
        {
            sum += next - cur
            i += 2
        }
        else {
            sum += cur
            i += 1
        }
    }
    
    return sum
};




console.log(romanToInt2("IX"))