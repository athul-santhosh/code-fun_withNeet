class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        function linearRob(houses) {

            // base cases
            if (houses.length === 0) {
                return 0;
            }
            if (houses.length === 1) {
                return houses[0];
            }

            let prev = Math.max(houses[0],houses[1]);
            let prevPrev = houses[0];
            let maxCanRob = prev;

            for (let h =2; h < houses.length; h++) {
                maxCanRob = Math.max(prevPrev + houses[h],prev);
                prevPrev = prev;
                prev = maxCanRob;
            }

            return maxCanRob;

        }

        // exclude last house , 

        const lastHouseExcluded = nums.slice(0,nums.length-1);
        const firstHouseExcluded = nums.slice(1);

        return Math.max(nums[0],linearRob(lastHouseExcluded),linearRob(firstHouseExcluded));



    }

}
