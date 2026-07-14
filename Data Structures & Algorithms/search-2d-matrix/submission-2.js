class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(mat, t) {
        for (let i = 0; i < mat.length; i++) {
            let lastCol = mat[i].length - 1;
            if (t > mat[i][lastCol]) {
                continue;
            }

            let left = 0;
            let right = lastCol;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (mat[i][mid] === t) {
                    return true;
                } else if (mat[i][mid] < t) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return false;
        }
        return false
    }
}
