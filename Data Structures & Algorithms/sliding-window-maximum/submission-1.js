// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number[]}
//      */
//     maxSlidingWindow(nums, k) {
//         let result = []
//         for(let i=0; i<=nums.length - k; i++){
//             let maxVal = Math.max(...nums.slice(i, i+k))
//             result.push(maxVal)
//         }
//         return result
//     }
// }


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = []; // Will store indices of elements

        for (let i = 0; i < nums.length; i++) {
            // 1. Remove indices that are out of the current window's bounds
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift(); // Remove from front
            }

            // 2. Remove elements smaller than the current element from the back
            // (They can never be the maximum of this or future windows)
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            // 3. Add the current element's index to the back of the deque
            deque.push(i);

            // 4. Once the window reaches size k, append the front of the deque to results
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}