class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */

    /*

        14 21

                                   I
        1 5  6 9  11 15   17 19    23 25

        1 5   6 9   11 21   23 25

        mS 11 , 14 => 11.  17 , 11. => 11  
        mE 21, 15 =>  21   19, 21 => 21


    */
    insert(intervals, newInterval) {

        const result = [];
        let index = 0;

        // Add all the elements first , which are not overlapping , if any 

        while (index < intervals.length && intervals[index][1] < newInterval[0]) {
            result.push(intervals[index]);
            index++;
        }

        let mergeStart = newInterval[0];
        let mergeEnd = newInterval[1];

        // Merge the overlapping interval , if necessary

        while (index < intervals.length && intervals[index][0] <= newInterval[1])  {
            mergeStart = Math.min(intervals[index][0],mergeStart);
            mergeEnd = Math.max(intervals[index][1],mergeEnd);
            index++;
        }

        result.push([mergeStart,mergeEnd]);

        // Add the remaining element , if any

        while(index < intervals.length) {
            result.push(intervals[index]);
            index++;
        }

        return result;
    }
}
