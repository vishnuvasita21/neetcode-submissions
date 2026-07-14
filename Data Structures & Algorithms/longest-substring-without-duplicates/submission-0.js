class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
       let charSet =new Set()
       let l=0
       let result = 0
       for(let i=0; i<str.length;i++){
        while(charSet.has(str[i])){
            charSet.delete(str[l])
            l+=1
        }
        charSet.add(str[i])
        result = Math.max(result, charSet.size)
       }
       return result
    }
    
}
