class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        
        let currMax = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i],nums[i] + currMax);
            maxSum = Math.max(currMax,maxSum);
        }

        return maxSum;
    }
}
