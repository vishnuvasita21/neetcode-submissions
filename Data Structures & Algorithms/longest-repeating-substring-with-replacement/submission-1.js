class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let occ = new Array(26).fill(0)
        let l=0;
        let result=0;

        const getIdx = (c) => c.charCodeAt(0) - 65;

        for(let i=0; i<s.length; i++){
            occ[getIdx(s[i])]++;

            while((i-l+1) - Math.max(...occ) > k)
            {
                occ[getIdx(s[l])]--
                l++
            }
            result = Math.max(result, i-l+1)
        }
        return result
    }
}
