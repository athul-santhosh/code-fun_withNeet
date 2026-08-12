/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        // create an array of start time in sorted order 
        // create an arrayo of end time in sorted order

        const startTimeSorted = intervals.map(interval => interval.start).sort((a,b) => a-b);
        const endTimeSorted = intervals.map(interval => interval.end).sort((a,b) => a-b);

        let s = 0;
        let e = 0;

        let maxRooms = 0;
        let currentRooms = 0;

        while (s < intervals.length) {
            if (startTimeSorted[s] < endTimeSorted[e]) {
                // Meeting is happening / needsto happen
                currentRooms++;
                s++;
            }
            else {
                currentRooms--;
                e++;
            }

            maxRooms = Math.max(maxRooms,currentRooms)
        }

        return maxRooms;

    }
}
