class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        
        const graph = Array.from({length: numCourses},() => []);
        const indegree = new Array(numCourses).fill(0);

        // populate the graph , and indegree

        for(let [course,preq] of prerequisites) {
            graph[preq].push(course);
            indegree[course]++;
        }

        // Start indegree execution with 0 elements

        const queue = [];

        for (let c=0; c < numCourses; c++) {
            if (indegree[c] === 0) {
                queue.push(c);
            }
        } 

        let completedCourse = 0;
        let result = [];

        while (queue.length > 0) {
            const course = queue.shift();
            result.push(course);
            completedCourse++;
            for (let n of graph[course]) {
                indegree[n]--;
                if (indegree[n] === 0) {
                    queue.push(n);
                }
            }
        }

        return completedCourse === numCourses ? result : [];

    }
}
