class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        let s1Count = new Array(26).fill(0), s2Count = new Array(26).fill(0);
        const getIdx = (str, i) => str.charCodeAt(i) - 97;

        // Initialize the first window
        for (let i = 0; i < s1.length; i++) {
            s1Count[getIdx(s1, i)]++;
            s2Count[getIdx(s2, i)]++;
        }

        // Fast string comparison format for our arrays
        const target = s1Count.join(',');

        // Slide the window
        for (let i = s1.length; i < s2.length; i++) {
            if (s2Count.join(',') === target) return true;
            s2Count[getIdx(s2, i)]++;               // Add incoming character
            s2Count[getIdx(s2, i - s1.length)]--;    // Remove outgoing character
        }

        return s2Count.join(',') === target;
    }
}