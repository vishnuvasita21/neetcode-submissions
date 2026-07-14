class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {const n = nums.length;
    const result = new Array(n);

    // 1. Calculate prefix products directly into the result array
    // result[i] will store the product of all elements to the left of i
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // 2. Calculate suffix products on the fly and multiply into result
    // We keep a running 'suffix' variable to save space
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix *= nums[i];
    }

    return result;}
}
