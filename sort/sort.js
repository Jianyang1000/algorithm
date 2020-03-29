function bubbleSort(array){
    let length = array.length
    let flag
    if(length <= 1) return array
    for(let i = 0;i < length;i++){
        flag = false
        for(let j = 0;j < length;j++){
            if(array[j] > array[j + 1]){
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                flag = true
            }
        }
        if(!flag) break
    }
    return array
}



function insertionSort(array){
    let length = array.length
    for(let i = 1;i < length;i++){
        let value = array[i]
        let j = i - 1
        for(;j >= 0;j--){
            if(value < array[j]){
                array[j+1] = array[j]
            }else {
                break
            }
        }
        array[j + 1] = value
    }
    return array
}


function selectSort(array){
    let length = array.length
    for(let i = 0;i < length;i++){
        let index = i
        let j = i + 1
        
        for(;j< length;j++){
            if(array[index] > array[j]){
                index = j
            }
        }
        let temp = array[i]
        array[i] = array[index]
        array[index] = temp
    }
    return array
}

function merge_sort(array){
    if(array.length <= 1) return array
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0,middle)
    let right = array.slice(middle)
    
    return merge(merge_sort(left),merge_sort(right))
}

function merge(left,right){
    let temp = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] <= right[rightIndex]){
            temp.push(left[leftIndex])
            leftIndex += 1
        } else {
            temp.push(right[rightIndex])
            rightIndex += 1
        }
    }
    return temp.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

function quick_sort(array,left,right){
    if(left < right){
        let pivot = right
        let partitionIndex = partition(array,pivot,left,right)
        quick_sort(array,left,partitionIndex - 1 < left ? left : partitionIndex - 1)
        quick_sort(array,partitionIndex + 1 > right ? right : partitionIndex + 1,right)
    }
}

function swap(array, i, j){
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function partition(arr,pivot,left,right){
    const pivotVal = arr[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex)
            startIndex++
        }
    }
    swap(arr, startIndex, pivot)
    return startIndex
}


function createArray(){
    let array = []
    for(let i = 0;i <= 30000;i++){
        let number = Math.ceil(Math.random()*1000)
        array.push(number)
    }
    return array
}

let array = createArray()
let array1 = array.slice(0)
let array2 = array.slice(0)
let array3 = array.slice(0)
let array4 = array.slice(0)


let t3 = new Date().getTime()
insertionSort(array)
let t4 = new Date().getTime()

let t1 = new Date().getTime()
bubbleSort(array1)
let t2 = new Date().getTime()

let t5 = new Date().getTime()
selectSort(array2)
let t6 = new Date().getTime()

let t7 = new Date().getTime()
merge_sort(array3)
let t8 = new Date().getTime()

let t9 = new Date().getTime()
quick_sort(array4,0,array4.length - 1)
let t10 = new Date().getTime()

console.log('bubble',t2 - t1)
console.log('insert',t4 - t3)
console.log('select',t6 - t5)
console.log('merge_sort',t8 - t7)
console.log('quick_sort',t10 - t9)

