class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let list = {
            ')':'(', 
            '}':'{',
            ']':'['
            }
        for(let i=0; i<s.length; i++){
            let char= s[i]
            if(char in list){
                if(stack[stack.length-1] !== list[char] || stack.length == 0)
                {
                    return false
                }
                stack.pop()
            }else{
                stack.push(char)
            }
        }
        return stack.length == 0
    }
}
