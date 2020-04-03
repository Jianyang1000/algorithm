class HashTable {
    constructor(){
        this.table = []
    }
    loseHashTable(key){
        let hash = 0
        for (var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        
        return hash%37;
    }
    put(key,value){
        this.table[this.loseHashTable(key)] = value
    }
    remove(key){
        this.table[this.loseHashTable(key)] = undefined
    }
    get(key){
        return this.table[this.loseHashTable(key)]
    }
    print(){
        for (var i=0;i<this.table.length;++i){
            if (this.table[i]!==undefined){
                console.log(i+':'+this.table[i]);
            }
        }
    }
}


let hashmap = new HashTable()
hashmap.put('haha',123)
hashmap.put('hehe',456)
console.log(hashmap.get('hehe'))
console.log('----------')
hashmap.remove('hehe')
hashmap.print()