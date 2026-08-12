class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    /*

    1 2 4 1 1 4 1 1

    0 1 2 3 4 5 6 7 8
      1 4     1     1

    */


    topKFrequent(nums, k) {

        const count = {};
        const result = [];

        const freqMap = Array.from({length: nums.length+1},() => []);

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        console.log(count);

        for (let [key,value] of Object.entries(count)) {
            freqMap[value].push(key);
        }

        for (let i = nums.length; i > 0; i--) {
            if (freqMap[i].length > 0) {
                for (let j=0; j < freqMap[i].length; j++) {
                    result.push(freqMap[i][j]);
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }

    }
}
