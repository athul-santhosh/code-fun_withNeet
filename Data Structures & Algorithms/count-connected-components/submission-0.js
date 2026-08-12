class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        
        const graph = new Map();
        const visited = new Array(n).fill(false);

        // fill up the graph 

        for (let i = 0; i < n; i++) {
            graph.set(i,[]);
        }

        for ( let [s,d] of edges) {
            graph.get(s).push(d);
            graph.get(d).push(s);
        }

        // dfs for populating in visited

        function dfs(node) {
            for (const neighbour of graph.get(node)) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    dfs(neighbour);
                }
            }
        }

        let connectedComponentCount = 0;

        for (let node =0; node < n; node++) {
            if (!visited[node]) {
                visited[node] = true;
                dfs(node);
                connectedComponentCount++;
            }
        }
        return connectedComponentCount;
    }
}
