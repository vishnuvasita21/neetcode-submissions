class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      if (!height || height.length === 0) return 0;

        let totalWater = 0;
        let left = 0;
        let right = height.length - 1;
        
        let leftMax = 0;
        let rightMax = 0;

        while (left < right) {
            // Decide which pointer to process based on which side has the shorter limiting wall
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left]; // Update left max
                } else {
                    totalWater += leftMax - height[left]; // Trap water!
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right]; // Update right max
                } else {
                    totalWater += rightMax - height[right]; // Trap water!
                }
                right--;
            }
        }

        return totalWater;
    }
}
