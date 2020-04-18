class Heap {
    constructor() {
        this.heap = []
    }
    buildHeap(a) {
        for (let i = 0; i < a.length; i++) {
            this.insert(a[i])
        }
    }
    heapify(n) {
        let i = 0
        let a = this.heap
        let max = 0
        while (true) {
            if (2 * i + 1 <= n && a[i] < a[2 * i + 1]) max = 2 * i + 1;
            if (2 * i + 2 <= n && a[max] < a[2 * i + 2]) max = 2 * i + 2;
            if (i === max) break
            [a[i], a[max]] = [a[max], a[i]]
            i = max
        }

    }
    insert(item) {
        let a = this.heap
        a.push(item)
        let index = a.length - 1
        while (index > 0 && a[index] > a[Math.floor((index - 1) / 2)]) {
            [a[Math.floor((index - 1) / 2)], a[index]] = [a[index], a[Math.floor((index - 1) / 2)]]
            index = Math.floor((index - 1) / 2)
        }
    }
    removeMax() {
        let a = this.heap
        let length = a.length
        if (a.length === 0) { return -1 }
        [a[length - 1], a[0]] = [a[0], a[length - 1]]
        a.pop()
        this.heapify(length)
    }
    sort() {
        let a = this.heap
        let i = a.length - 1
        while (i > 0) {
            [a[0], a[i]] = [a[i], a[0]]
            i -= 1
            this.heapify(i)
        }
    }
    display() {
        console.log(this.heap)
    }
}

let heap = new Heap()
heap.buildHeap([1, 2, 5, 8, 12, 3, 7, 0])
heap.sort()
heap.display()

