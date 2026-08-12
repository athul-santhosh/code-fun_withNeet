class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // Create graph 

        if (edges.length > n-1) {
            return false;
        }

        const graph = Array.from({length:n},() => []);

        for (let [i,o] of edges) {
            graph[i].push(o);
            graph[o].push(i);
        }

        const visited = new Set();

        // bfs 
        // current node , parent
        const queue = [[0,-1]];
        visited.add(0);

        while (queue.length > 0) {
            // get the node from queue

            const [node,parent]= queue.shift();
            for (const neigh of graph[node]) {

                if (neigh === parent) {
                    continue;
                }

                if (visited.has(neigh)) return false;
                visited.add(neigh);

                queue.push([neigh,node]);

            }
        }

        return visited.size === n;








    }
}
