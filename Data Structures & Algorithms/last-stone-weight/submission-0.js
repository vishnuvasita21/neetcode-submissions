class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxQ = new MaxPriorityQueue()

        for(const stone of stones){
            maxQ.enqueue(stone)
        }

        while(maxQ.size() > 1){
            const stone1 = maxQ.dequeue()
            const stone2 = maxQ.dequeue()

            if(stone1 !== stone2){
                maxQ.enqueue(stone1 - stone2)
            }
        }

        return maxQ.size() === 1?maxQ.dequeue():0
    }
}
