class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums)
        let longest = 0

        for(let n of s){
            if(!s.has(n -1)){
                let curr=1
                while(s.has(n+1)){
                    curr+=1
                    n+=1
                }
                longest = Math.max(longest, curr)
            }
        }
        return longest



    }
}
