class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if the length of both strings are different , do an early return 

        if (s.length !== t.length) {
            return false;
        }


        // use 1 map for s.
        // loop through each values of s and create a map like {a:5 , b:1, c:3} .. etc.

        const sMap = {};

        for (let ch of s) {
            sMap[ch] = (sMap[ch] || 0 ) + 1;
        };

        /*
        Loop through T , and check for each element and subtract that from the s map , 
        At the end just check through the map , if there are any element remaining , if yes return false , if the ement is not at all there , then return true.
        */

        for (let ch of t) {
            if (ch in sMap) {
                sMap[ch] -= 1;
                if (sMap[ch] === 0) {
                    delete sMap[ch];
                }
            }
            else {
                return false;
            }
        }
        return true;


    }
}
