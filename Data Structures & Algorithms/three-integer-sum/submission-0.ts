class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {


        /*

        First find a soultion , 

        Then make it skip the duplicates.

        */

        const result = [];


        nums.sort((a,b) => a-b);

        for (let first = 0 ; first < nums.length-2; first++) {

            if (first > 0 && nums[first] == nums[first-1]) {
                continue;
            }

            let left = first + 1;
            let right = nums.length-1;

            while (left < right) {
                const sum = nums[first] + nums[left] + nums[right];
                if (sum === 0) {
                    // found a triplet
                     result.push([
                        nums[first],
                        nums[left],
                        nums[right]
                    ])

                    left++;
                    right--;

                    while (left < right && nums[left] == nums[left-1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right+1]) {
                        right--;
                    }

                }
                else if ( sum > 0){
                    right--;
                }   
                else {
                    left++;
                }
            }

        }


        return result;
    }
}
