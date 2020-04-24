// 栈

var isValid = function (s) {
    let model = []
    for (let i = 0; i < s.length; i++) {
        if ((s[i] === ")" && model[model.length - 1] === "(") || (s[i] === "]" && model[model.length - 1] === "[") || (s[i] === "}" && model[model.length - 1] === "{")) {
            model.pop()
        }
        else {
            model.push(s[i])
        }
    }
    return model.length === 0
};


// Stack Two
// 简化了一下代码，
let hashMap = new Map()
hashMap.set('(', ')')
hashMap.set('[', ']')
hashMap.set('{', '}')

var isValid2 = function (s) {
    let model = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === hashMap.get(model[model.length - 1])) model.pop()
        else model.push(s[i])
    }
    return model.length === 0
};

console.log(isValid2("{{{"))