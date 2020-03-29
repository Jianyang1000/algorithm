function bsearch(array,value){
    let low = 0 
    let high = array.length - 1

    let middle 
    while(low <= high){
        middle = Math.floor(low + (high - low) / 2)
        if(value < array[middle]){
            high = middle - 1
        } else if(value > array[middle]){
            low = middle + 1
        } else {
            return middle
        }
    }
    return -1
}


function bsearch2(array,low,high,value){
    if(low > high) return -1

    let middle = Math.floor(low + (high - low) / 2)
    if(value < array[middle]){
        return bsearch2(array,low,middle - 1,value)
    }else if(value > array[middle]){
        return bsearch2(array,middle + 1,high,value)
    }else {
        return middle
    }
}


function bsearchFirstEqual(array,value){
    let low = 0 
    let high = array.length - 1

    let middle 
    while(low <= high){
        middle = Math.floor(low + (high - low) / 2)
        if(value < array[middle]){
            high = middle - 1
        } else if(value > array[middle]){
            low = middle + 1
        } else {
            if(middle === 0 || array[middle-1] !== value) return middle
            high = middle - 1
        }
    }
    return -1
}

function bsearchLastEqual(array,value){
    let low = 0 
    let high = array.length - 1

    let middle 
    while(low <= high){
        middle = Math.floor(low + (high - low) / 2)
        if(value < array[middle]){
            high = middle - 1
        } else if(value > array[middle]){
            low = middle + 1
        } else {
            if(middle === 0 || array[middle+1] !== value) return middle
            low = middle + 1
        }
    }
    return -1
}

function bsearchFirstThan(array,value){
    let low = 0 
    let high = array.length - 1

    let middle 
    while(low <= high){
        middle = Math.floor(low + (high - low) / 2)
        if(value <= array[middle]){
            if(middle === 0 || array[middle-1] < value) return middle
            else high = middle - 1
        } else{
            low = middle + 1
        }
    }
    return -1
}

function bsearchLastLess(array,value){
    let low = 0 
    let high = array.length - 1

    let middle 
    while(low <= high){
        middle = Math.floor(low + (high - low) / 2)
        if(value < array[middle]){
            high = middle - 1
        } else{
            if(middle === array.length - 1 || array[middle+1] > value) return middle
            else low = middle + 1
        }
    }
    return -1
}



let array = [1,2,4,4,6,7]
console.log(bsearch(array,4)) // 2
console.log(bsearch2(array,0,array.length -1,4))  // 2
console.log(bsearchFirstEqual(array,4))  // 2
console.log(bsearchLastEqual(array,4))  // 3
console.log(bsearchFirstThan(array,3))  // 2
console.log(bsearchLastLess(array,8))  // 5