class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

            for (let i = 0; i < nums.length; i++) {
                    // Create a temporary array excluding the current index i
                            const tempArray = nums.filter((_, index) => index !== i);
                                    
                                            // Calculate the product of all elements in the temporary array
                                                    const product = tempArray.reduce((acc, curr) => acc * curr, 1);
                                                            
                                                                    // Store the result
                                                                            result.push(product);
                                                                                }

                                                                                    return result;
    }
}
