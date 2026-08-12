class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currentMax = Math.max(currentMax + nums[i],nums[i]);
            maxSum = Math.max(currentMax,maxSum);
        }


        return maxSum;

    }
}
