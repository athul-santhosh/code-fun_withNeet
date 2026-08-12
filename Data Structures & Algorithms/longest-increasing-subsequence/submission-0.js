class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        
        if (nums.length === 1) return 1;

        const dp = Array.from({length: nums.length},() => 1);

        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i],1 + dp[j]);
                }
            }
        }

        return Math.max(...dp);
    }
}
