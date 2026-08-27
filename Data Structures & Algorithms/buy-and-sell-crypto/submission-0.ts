class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let currentLowest = prices[0];

        for (let i = 1; i < prices.length; i++) {
            currentLowest = Math.min(currentLowest,prices[i]);
            let currentProfit = prices[i] - currentLowest;
            maxProfit = Math.max(currentProfit,maxProfit);
        }

        return maxProfit;
    }
}
