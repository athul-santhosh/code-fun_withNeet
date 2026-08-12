class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */

    /*
        1 3 
        3 4
        2 5 
        8 10
    */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let count = 0;

        let prevEnd = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            let currStart = intervals[i][0];
            let currEnd = intervals[i][1];
            if (currStart < prevEnd) {
                count++;
                prevEnd = Math.min(currEnd, prevEnd);
            } else {
                prevEnd = intervals[i][1];
            }
        }

        return count;

    }
}
