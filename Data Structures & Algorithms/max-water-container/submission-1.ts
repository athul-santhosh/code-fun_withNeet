class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;

        while (left < right) {
            let currentMinHeight = Math.min(heights[left],heights[right]);
            let currentArea = (right-left) * currentMinHeight;

            maxArea = Math.max(currentArea,maxArea)

            if (heights[left] > heights[right]) {
                right--;
            }
            else {
                left++;
            }
        }

        return maxArea;
    }
}
