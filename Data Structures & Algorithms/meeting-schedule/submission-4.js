/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

/*
[(0,30),(5,10),(15,20)]

0 5 10 15 20 25 30
        X-x
  X-x
X---------------x

CurrentStart >= prevEnd , then fine , else false;

*/

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        if (intervals.length === 0) return true;

        intervals.sort((a,b) => a.start - b.start);

        let prevEnd = intervals[0].end;

        for (let index = 1; index < intervals.length; index++) {
            const currentStart = intervals[index].start;
            if (currentStart >= prevEnd) {
                prevEnd = intervals[index].end;
            }
            else {
                return false;
            }
        }

        return true;

    }
}
