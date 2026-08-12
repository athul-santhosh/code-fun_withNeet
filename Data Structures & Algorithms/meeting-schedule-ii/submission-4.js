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
        const startTimeSorted = intervals.map(i => i.start).sort((a,b) => a - b);
        const endTimeSorted = intervals.map(i => i.end).sort((a,b) => a - b);

        let s = 0;
        let e = 0;

        let currentMeetings = 0;
        let maxMeetingsAtAnyTime = 0;

        while (s < intervals.length) {
            if (startTimeSorted[s] < endTimeSorted[e]) {
                currentMeetings++;
                s++;
            }
            else {
                currentMeetings--;
                e++;
            }

            maxMeetingsAtAnyTime = Math.max(currentMeetings,maxMeetingsAtAnyTime)
        }

        return maxMeetingsAtAnyTime;
    }
}
