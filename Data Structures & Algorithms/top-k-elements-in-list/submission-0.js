class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const cMap = new Map();
        for(let num of nums) {
           
            cMap.set(num, (cMap.get(num) || 0) + 1);
        }

        return Array.from(cMap.keys())
            .sort((a, b) => cMap.get(b) - cMap.get(a))
            .slice(0, k);
    }
}
