class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;

        // Pointers for a conceptual 1D array
        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            // Convert 1D index back to 2D coordinates
            let row = Math.floor(mid / n);
            let col = mid % n;
            
            let midValue = matrix[row][col];

            if (midValue === target) {
                return true; // Target found
            } else if (midValue < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }

        return false;
    }
}