class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let largestArea = 0;
        let start = 0;
        let end = heights.length - 1;

        while (start < end) {
            // 1. Calculate width
            const width = end - start;
            
            // 2. Calculate area based on the shorter wall
            const currentHeight = Math.min(heights[start], heights[end]);
            const area = currentHeight * width;
            
            // 3. Update the maximum area found so far
            largestArea = Math.max(largestArea, area);

            // 4. Move the pointer that points to the shorter wall
            if (heights[start] < heights[end]) {
                start++;
            } else {
                end--;
            }
        }

        return largestArea;
    }
}