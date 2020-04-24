function urlParser(url){
    let index = url.indexOf('?')
    let search
    if(index !== -1){
        search = url.slice(index+1)
    }
    let hash = {}
    let hashmap = search.split('&')
    for(let i = 0;i < hashmap.length;i++){
        hash[hashmap[i].split('=')[0]] = hashmap[i].split('=')[1]
    }
    
    return hash
}

console.log(urlParser('https://time.geekbang.org/column/article/70187'))