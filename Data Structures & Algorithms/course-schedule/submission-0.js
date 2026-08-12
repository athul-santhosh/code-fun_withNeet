class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const inDegree = new Array(numCourses).fill(0);
        const adjacencyList = Array.from({ length: numCourses }, () => []);

        for (const [course, prereq] of prerequisites) {
            adjacencyList[prereq].push(course);
            inDegree[course]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        let completedCourses = 0;

        while (queue.length > 0) {
            const current = queue.shift();
            completedCourses++;

            for (const neighbor of adjacencyList[current]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) queue.push(neighbor);
            }
        }

        return completedCourses === numCourses;
    }
}
