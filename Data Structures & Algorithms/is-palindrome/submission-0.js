class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length ==0 || s.length == 1) return true

        let clearedS = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

        let f=0;
        let l= clearedS.length - 1;

        while(f <= l){
            if(clearedS[f] !== clearedS[l]) {
                return false
            }
            f++;
            l--;
        }
        return true
    }
}
