/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

// max number of days that i will have is intervals.length;

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length <= 1) {
            return intervals.length;
        }
        // sort based on the start time 
        intervals.sort((a,b) => a.start - b.start);

        let meetings = [];
        intervals.forEach(meet => meetings.push(meet));

        for (let d =1; d <= intervals.length+1; d++) {
            if (meetings.length === 0) {
                return d-1;
            }
            let currentDayMeetings = [meetings.shift()];
            console.log('d',d);
            console.log('CurrentDay Meetings',currentDayMeetings)
            console.log('meetings',meetings);
            let i = 0;
            while (i < meetings.length) {
                let prevEnd = currentDayMeetings[currentDayMeetings.length-1].end;
                let currStart = meetings[i].start            
                if (prevEnd <= currStart) {
                    currentDayMeetings.push(meetings.splice(i, 1)[0]);
                }else {
                    i++;
                }
            }
            console.log('Current Day Taken Meetings',currentDayMeetings)
            console.log('x-----x')
            currentDayMeetings = [];
        }
    }
}
