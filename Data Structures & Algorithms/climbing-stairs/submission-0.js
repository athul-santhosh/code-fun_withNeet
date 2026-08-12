class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    /*

    5 

    1  2.   3 4 5 
    1  2    
       1
       2
    */
    climbStairs(n) {

        function canReach (n, memo = {}) {

            if (n in memo) {
                return memo[n];
            }


            if (n == 1) {
                return 1;
            }
            if (n == 2) {
                return 2;
            }

            memo[n] = canReach(n-1) + canReach(n-2);
            return memo[n];
        }

        return canReach(n);
    }
}
