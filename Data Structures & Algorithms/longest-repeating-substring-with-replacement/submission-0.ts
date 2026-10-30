class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let characterWithMostFrequencyInWindow = 0;


        let left = 0;

        let countMap = {};

        let MaxLongest = 0;

        for (let right = 0; right < s.length; right++) {
            countMap[s[right]] = (countMap[s[right]] || 0) + 1;

            characterWithMostFrequencyInWindow = Math.max(countMap[s[right]],characterWithMostFrequencyInWindow );
            

            // Invalid Window;
            if (right-left + 1 - characterWithMostFrequencyInWindow > k ) {
                countMap[s[left]]--;
                left++;
            }

            MaxLongest = Math.max(MaxLongest,right-left+1);
        }

        return MaxLongest;

    }
}
