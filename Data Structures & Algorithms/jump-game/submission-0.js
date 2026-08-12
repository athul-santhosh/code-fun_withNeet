class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /*

      F
    1 2 0 1 0 
    0 1 2 3 4
    I

    */
    canJump(nums) {

        let flag = nums.length - 1;

        for (let i = nums.length - 2; i >= 0; i--) {

            // if i can reach flag from here 
            if (nums[i] + i >= flag) {
                flag = i;
            }

        }

        console.log(flag);

        return flag === 0;

    }

}
