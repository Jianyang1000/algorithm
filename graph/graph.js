let LinkList = require('../linklist/linklist')
LinkList = LinkList.LinkList

class Graph {
    constructor(v){
        this.v = v
        this.adj = []
    }
    buildGraph(){
        let length = this.v
        for(let i = 0;i < length;i++){
            this.adj[i] = new LinkList()
        }
    }
    addEdge(s,t){
        this.adj[s].append(t)
        this.adj[t].append(s)
    }
    display(){
        console.log(this.adj)
    }
}


let graph = new Graph(5)
graph.buildGraph()
graph.addEdge(1,3)
graph.display()