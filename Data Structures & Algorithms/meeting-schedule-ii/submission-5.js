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


0     5      15
                    s

10    20     40
              e

Meet = 1 2
Max = 2

*/

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const startTime = intervals.map(i => i.start).sort((a,b) => a-b);
        const endTime = intervals.map(i => i.end).sort((a,b) => a-b);

        let s = 0;
        let e = 0;

        let currMeeting = 0;
        let maxRoomsRequired = 0;

        while (s < intervals.length) {
            if (startTime[s] < endTime[e]) {
                currMeeting++;
                s++
            }
            else {
                currMeeting--;
                e++;
            }
            maxRoomsRequired = Math.max(currMeeting,maxRoomsRequired);
        }

        return maxRoomsRequired;
    }
}
