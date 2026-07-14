class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevNums=new Map();

        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i];
            if(prevNums.has(diff)){
                return [prevNums.get(diff), i];
            }
            prevNums.set(nums[i], i)
        }
    }
}
