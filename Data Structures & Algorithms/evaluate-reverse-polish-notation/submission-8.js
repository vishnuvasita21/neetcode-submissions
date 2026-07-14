class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let r = [];
        for (let t of tokens) {
            if (t == "+") {
                r.push(r.pop() + r.pop())
            } else if (t== "-") {
                let b=r.pop()
                let a=r.pop()
                r.push(a-b)
            }
             else if (t == "*") {
                r.push(r.pop() * r.pop())
            }
             else if (t == "/") {
                let b=r.pop()
                let a=r.pop()
                r.push(Math.trunc(a/b))
            }
            else{
                r.push(Number(t))
            }
        }
        return r[r.length - 1]
    }
}
