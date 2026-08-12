class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {





        // sort the result 
        intervals.sort((a,b) => a[0] - b[0]);

        const result = [intervals[0]];
        let index = 0;

        while (index < intervals.length) {
            let prevEnd = result[result.length-1][1];
            let currStart = intervals[index][0];
            if (prevEnd >= currStart)  {
                let currEnd =intervals[index][1] 
                result[result.length-1][1] = Math.max(prevEnd,currEnd)
            } else {
                result.push(intervals[index]);
            }
            index++;
        }

        return result;
    }
}
