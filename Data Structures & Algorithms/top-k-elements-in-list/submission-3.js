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

        /*

        1   2    3    4      5     6 
       [] []    [5]   []   [].     []
 
        4 : 6 

        5 : 3 

        3 : 2


        Reverse frequency map 

        */


        const frequency = {};

        for (let n of nums) {
            frequency[n] = (frequency[n] || 0) + 1;
        }


        const freqMap = {};
        for (let i = 1; i <= nums.length; i++) {
            freqMap[Number(i)] = [];
        }

        for (const [count, value] of Object.entries(frequency)) {
            freqMap[value].push(count);
        }

        const result = [];
        for (let i = nums.length; i > 0; i--) {
            if (freqMap[i].length > 0) {
                for (let j = 0; j < freqMap[i].length; j++) {
                    result.push(freqMap[i][j]);
                    if (result.length === k) {
                        return result;
                    }
                }
            }

        }

    }
}
