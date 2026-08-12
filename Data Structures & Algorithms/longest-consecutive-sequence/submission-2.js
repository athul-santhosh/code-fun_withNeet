class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) return 0;

        const set = new Set(nums);

        let count = 1;

        let max = 1;

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i]-1)) {
                continue;
            }
            else {
                let curr = nums[i];
                while (set.has(curr+1)) {
                    count++;
                    max = Math.max(count,max)
                    curr = curr+1;
                }
                count = 1;
            }
        }

        return max;

    }
}
