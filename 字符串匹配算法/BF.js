function BFmatch(string,pattern){
    let j = 0
    for(let i = 0;i < string.length;i++){
        while(j < pattern.length){
            if(string[j+i] !== pattern[j])
            {
                break;
            }
            j += 1
        }
        if(j === pattern.length){
            return i
        }
        j = 0
    }
    return -1
}



console.log(match('jianyang','g'))