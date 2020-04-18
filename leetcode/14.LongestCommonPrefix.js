var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    let base = strs[0]
    for(let i = 1;i < strs.length;i++){
        while(base.indexOf(strs[i]) !== 0){
            strs[i] = strs[i].slice(0,strs[i].length - 1)
            if(strs[i] === '')return ''
        }
        base = strs[i]
    }
    return base
};