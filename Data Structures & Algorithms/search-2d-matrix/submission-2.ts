class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // identify the row , then apply binary search on that row



        function binarySearch (row) {
            let low = 0;
            let high = matrix[0].length -1;

            let nums = matrix[row];

            while (low <= high) {

                let mid = Math.ceil((low + high) / 2);
                if (nums[mid] === target) {
                    return true;
                }
                if (nums[mid] > target) {
                    high = mid-1;
                }
                else {
                    low = mid + 1;
                }
            }

            return false;
        }


        let low = 0;
        let high = matrix.length -1;


        // find the smallest number close to the target , that starts the row.

        while (low < high) {

            let mid = Math.ceil((low + high) / 2);

            if (matrix[mid][0] > target) {
                high = mid -1;
            }
            else {
                low = mid;
            }
        }
        
        return binarySearch(low);


    }
}
