class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(mat, t) {
    
            let m = mat.length
            let n = mat[0].length

            let l = 0;
            let r = m*n-1

           

            while(l<=r){
            let mid = Math.floor((l+r)/2)


            let col = Math.floor(mid/n)
            let row = mid%n
                if(mat[col][row] == t){
                    return true
                }
                else if(mat[col][row] < t){
                    l=mid+1
                }else if(mat[col][row] > t){
                    r=mid-1
                }
            }
            return false
       
    }
}
