class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let s=0;
        let e=numbers.length - 1;

        while(s<e){
            let t=numbers[s]+numbers[e]
            if(t>target){
                e--
            }
            else if(t<target){
                s++
            }
            else{
                return [s+1, e+1]
            }
        }
    }
}
