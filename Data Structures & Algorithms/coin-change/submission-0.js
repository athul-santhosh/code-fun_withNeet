class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        
        if (amount <= 0) return 0;

        const dp = Array.from({length: amount+1},() => Infinity);

        dp[0] = 0;

        for (let a=1; a <= amount; a++) {

            for (let coin of coins) {
                if (coin <= a) {
                    dp[a] = Math.min(dp[a],1+ dp[a-coin]);
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount]
    }
}
