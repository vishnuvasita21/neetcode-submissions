class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        int m = matrix.length;
        int n = matrix[0].length;
        int totalNumInArray = m * n;
        int[] singleArray = new int[totalNumInArray];
        
        int index = 0; 
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                singleArray[index] = matrix[i][j];
                index++;
            }
        }

        System.out.println(Arrays.toString(singleArray));
        
        int low = 0;
        int high = totalNumInArray - 1;

        while (low <= high) {
            int newMid = low + (high - low) / 2;
            
            if (singleArray[newMid] == target) {
                return true;
            } 
            else if (target < singleArray[newMid]) {
                high = newMid - 1;
            } 
            else {
                low = newMid + 1;
            }
        }
        return false;
    }
}

