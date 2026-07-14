class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let mid = Math.floor((r + l) / 2);
            let hours = 0;
            for (let p of piles) {
                hours += Math.ceil(p / mid);
            }
            if (hours <= h) {
                res = Math.min(res, mid);
                r = mid - 1;
            } else {
                l = mid + 1;
            }
            
        }
        return res;
    }
}
