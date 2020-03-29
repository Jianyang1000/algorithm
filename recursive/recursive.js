let map = new Map()

// function f(n){
// 	if(n === 1) return 1
//     if(n === 2) return 2
    
//     if(map.has(n)){
//         return map.get(n)
//     }
//     let ret = f(n-1) + f(n-2)
//     map.set(n,f(n-1) + f(n-2))
//     return ret
// }

function f(n){
	if(n === 1) return 1
    if(n === 2) return 2
    
    return f(n-1) + f(n-2)
}


let t1 = new Date().getTime()
console.log(f(40))
let t2 = new Date().getTime()
console.log('time:',t2-t1)