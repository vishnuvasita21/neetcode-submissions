class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        s = s.replace(/\s+/g, '')
        let num = 0
        let prev = 0
        const stack  = []
        let op='+'
        for(let i=0; i<s.length; i++){
            let ch = s[i]
            if(/\d/.test(ch)){
                num = num * 10 + (ch - '0')
            }
            if(!/\d/.test(ch) || i === s.length -1){
                if(op === '+'){
                    stack.push(num)
                }else if(op === '-'){   
                    stack.push(-num)
                }else if(op === '*'){
                    stack.push(stack.pop() * num)
                }else{
                    prev = stack.pop()
                    stack.push(Math.trunc(prev / num))
                }
                op = ch
                num = 0
            }
        }


        return stack.reduce((a,b) => a+b, 0)
        
    }
}
