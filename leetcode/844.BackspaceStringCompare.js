var backspaceCompare = function(S, T) {
    let S2 = []
    let T2 = []
    for(let i = 0;i < S.length;i++){
        if(S[i] === '#'){
            S2.pop()
        }else{
            S2.push(S[i])
        }
    }
    for(let i = 0;i < T.length;i++){
        if(T[i] === '#'){
            T2.pop()
        }else {
            T2.push(T[i])
        }
    }
    return S2.join('') === T2.join('') ?  true : false
};


//优化代码
var backspaceCompare = function(S, T) {
    return getFromatterString(S) === getFromatterString(T)
};

var getFromatterString = function(S){
    let S2 = []
    for(let i = 0;i < S.length;i++){
        if(S[i] === '#'){
            S2.pop()
        }else{
            S2.push(S[i])
        }
    }
    return S2.join('')
}




console.log(backspaceCompare("xywrrmp","xywrrmu#p"))



