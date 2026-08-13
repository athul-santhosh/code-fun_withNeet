class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {


        /*

        [1,2,2,3,3,3] -> 2

        Sort the elements in descending order , and then ,Loop from left to right  ,fill the array until its length has reach k  , return it , 

        */


        const frequency = {};
        for (let elem of nums) {
            frequency[elem] = (frequency[elem] || 0) + 1;
        }

        nums.sort((a,b) => frequency[b] - frequency[a]);

        const result = new Set();

        for (let i = 0; i < nums.length; i++) {
            result.add(nums[i]);
            if (result.size == k) {
                return [...result];
            }
        }
    }
}
