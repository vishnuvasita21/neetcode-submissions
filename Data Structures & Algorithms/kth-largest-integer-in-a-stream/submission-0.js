class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    // Insert a value into the heap
    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    // Remove and return the smallest value
    dequeue() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        // Move the last element to the root and bubble it down
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return root;
    }

    // Restore heap property upwards after insertion
    _bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            // Swap with parent if parent is larger
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Restore heap property downwards after removal
    _bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break; // Heap property satisfied

            // Swap with smaller child
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinHeap();
        this.k = k;

        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        return this.minHeap.peek();
    }
}
// class KthLargest {
//     /**
//      * @param {number} k
//      * @param {number[]} nums
//      */
//     constructor(k, nums) {
//        this.minHeap = new MinPriorityQueue()
//        this.k = k

//        for(const num of nums){
//         this.minHeap.enqueue(num)
//        }
//        while(this.minHeap.size()> k){
//         this.minHeap.dequeue()
//        }
//     }

//     /**
//      * @param {number} val
//      * @return {number}
//      */
//     add(val) {
//         this.minHeap.enqueue(val);
//         if(this.minHeap.size() >this.k){
//             this.minHeap.dequeue()
//         }
//         return this.minHeap.front()
//     }
// }
