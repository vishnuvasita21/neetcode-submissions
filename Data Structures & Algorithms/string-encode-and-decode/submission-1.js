class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = []
        for(let str of strs){
          
            encodedStr.push(str.length  + "#" + str)
        }
        return encodedStr.join("") 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let decoded_string = []
        let slicedStr = ""
        while(i<str.length)
        {
            let j = str.indexOf("#", i)
            let len=Number(str.slice(i, j))
            slicedStr = str.slice(j+1, j+1+len)
            decoded_string.push(slicedStr)
            i=j+1+len
        }
        return decoded_string
    }
}
