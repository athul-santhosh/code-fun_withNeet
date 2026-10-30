class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let left = 0;


        const map = new Set();

        let MaxLength = 0;

        for (let right = 0; right < s.length; right++) {

            while(map.has(s[right])) {
                map.delete(s[left]);
                left++;
            }
            
            map.add(s[right]);


            
            MaxLength = Math.max(right-left + 1,MaxLength);
        }

        return MaxLength;

    }
}


/*

L
   R
zxyyzxyz


window set = length = Thats to be returned

*/