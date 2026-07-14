// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number}
//      */
//     search(nums, t) {
//         let l=0
//         let r=nums.length-1

//         while(l<=r){
//             let mid = Math.floor((l+r)/2)
//             if(nums[mid] == t){
//                 return mid
//             }
//             if(nums[l] <= nums[mid]){
//                 if(nums[l] <= t && t<nums[mid]){
//                     r=mid-1
//                 }else{
//                     l=mid+1
//                 }
//             }else{
//                 if(nums[mid] < t && t<=nums[r]){
//                     l = mid+1
//                 }else{
//                     r=mid-1
//                 }
//             }

//         }
//         return -1
//     }
// }
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Guard clause to handle undefined/empty array inputs
        if (!nums || nums.length === 0) {
            return -1;
        }

        // 1. Build the Hash Map: O(n) Time, O(n) Space
        const lookup = new Map();
        for (let i = 0; i < nums.length; i++) {
            lookup.set(nums[i], i);
        }

        // 2. Perform the lookup: O(1) Time
        if (lookup.has(target)) {
            return lookup.get(target);
        }

        return -1;
    }
}