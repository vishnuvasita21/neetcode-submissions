class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let largestArea = 0;
        let start=0;
        let end=heights.length -1 
        while(start<end){
            const width = end - start
            const area = Math.min(heights[start], heights[end])*width
            largestArea=Math.max(area,largestArea)

            if(heights[start]<heights[end]){
                start++
            }
            else{
                end--
            }

        }
        return largestArea
    }
    
}
