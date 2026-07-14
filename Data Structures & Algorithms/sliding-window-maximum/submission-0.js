class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = []
        for(let i=0; i<=nums.length - k; i++){
            let maxVal = Math.max(...nums.slice(i, i+k))
            result.push(maxVal)
        }
        return result
    }
}
