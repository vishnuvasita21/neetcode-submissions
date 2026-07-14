class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let result = Array(t.length).fill(0)
        let stck = [] //[value, index]
        for(let i=0; i<t.length; i++){
            while(stck.length !=0 && t[i]>stck[stck.length-1][0])
            {
                let stckIndx = stck.pop()[1]
                result[stckIndx] = (i - stckIndx)
            }
            stck.push([t[i], i])
        }

        return result
    }
}
