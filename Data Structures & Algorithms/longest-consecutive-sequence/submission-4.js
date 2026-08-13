class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        let maxCount = 0;

        for (let elem of s) {
            if (s.has(elem + 1)) continue; // not a sequence end, skip

            let count = 1;
            while (s.has(elem - 1)) {
                count++;
                elem = elem - 1;
            }
            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
