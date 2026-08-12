class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({length: numCourses},() => []);
        const indegree = new Array(numCourses).fill(0);

        let completedCourse = 0;
 
        for (let [c,p] of prerequisites) {
            if (!graph[p]) {
                graph[p]=[];
            }
            graph[p].push(c);
            indegree[c]++;
        }

       // get a queue

       const queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }

        while(queue.length > 0) {
            let curr = queue.shift();
            completedCourse++;
            for (let n of graph[curr]) {
                indegree[n]--;
                if (indegree[n] === 0) {
                    queue.push(n);
                }

            }
        }

        return completedCourse == numCourses;


    }
}
