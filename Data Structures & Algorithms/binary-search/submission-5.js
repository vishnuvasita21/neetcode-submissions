class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, t) {
       let i=0
       let j=nums.length-1
        while(i<=j){
            let m=Math.trunc((i+j)/2)
            if(nums[m]===t){
                return m
            }
            else if(nums[m] < t){
                i=m+1
            }
            else{
                j=m-1
            }
        }
        return -1

    }
}
