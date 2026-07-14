class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stck = [] // [index, height]
        let maxArea = 0
        for(let i=0; i<heights.length; i++){
            let start = i
            while(stck.length != 0 && stck[stck.length -1][1] > heights[i]){
                let val = stck.pop()
                let indx = val[0]
                let h = val[1]
                maxArea = Math.max(maxArea, (h * (i - indx)))
                start = indx
            }
            stck.push([start, heights[i]])
        }
        while (stck.length > 0) {
            let [indx, h] = stck.pop();
            maxArea = Math.max(maxArea, h * (heights.length - indx));
        }
        return maxArea
    }
}
