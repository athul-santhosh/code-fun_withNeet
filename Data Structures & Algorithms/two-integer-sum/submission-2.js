class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*


        offsetMap = {1: 0 , 4: 1,  }

                  ! 
        nums [1,4,6,8];    Target = 10.        ->> [1,2]
              0 1 2 3


              


              What is the value that i need to get target , 
              if i have that value , and i have already seen it in the past , then i can use that , and the current index , that is my answer.



        */


        const offset = {};

        for (let i =0; i < nums.length; i++) {
            let requiredValue = target - nums[i];
            if (requiredValue in offset) {
                return [offset[requiredValue],i];
            }
            else {
                offset[nums[i]] = i;
            }
        }


    }
}
