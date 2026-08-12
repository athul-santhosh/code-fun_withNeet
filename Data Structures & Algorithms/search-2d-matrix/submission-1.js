class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    /*

    Find the row where the target is likely to be present , and then do binary search on that row.

    Find the first number which is less than target 

    Target = 18  -> 15 -> Done 
    Target = 28  -> 27 -> Done 
    Target = 8  -> 5.  -> Done 

       H
       L
    1  5  9 10  12  15  19  23  27   39
    0  1. 2  3.  4.  5.  6.  7.  8.   9
    
    

    Shrink the left window to get the first value , 

    mid = (low + high + 1) / 2

    if (nums[mid] <= target) {
        low = mid;
    }else {
         high = mid -1;
    }

    return low;

     0.  1.  2.  3
     H
     10, 11, 12, 13 
      L

    */
    searchMatrix(matrix, target) {

        function BS(nums) {

            console.log('nums',nums);

            let low = 0;
            let high = nums.length -1;

            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (nums[mid] === target) {
                    return true;
                }
                if (nums[mid] > target) {
                    high = mid -1;
                }
                else {
                    low = mid +1;
                }
            }

            return false;

        }

        let low = 0;
        let high = matrix.length-1;

        while (low < high) {
            let mid = Math.floor((low + high + 1) / 2);
            if (matrix[mid][0] <= target) {
                low = mid;
            } else {
                high = mid - 1;
            }
        }

        return BS(matrix[low]);
    }
}
