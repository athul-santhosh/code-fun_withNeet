class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

        // base case 
        if (s.length == 1) {
            return 1;
        }

        const LeftBound = 0;
        const RightBound = s.length - 1;

        let palindromeCount = 0;

        function Expander(left,right) {

            while ((left >= LeftBound && right <= RightBound) && s[left] === s[right])  {
                    palindromeCount++;
                    left--;
                    right++;
                     
                }
            

        }

        for (let i = 0; i < s.length; i++) {
            Expander(i,i);
            if (i !== s.length-1) {
                Expander(i,i+1);
            }
        }

       return palindromeCount;

    }
}
