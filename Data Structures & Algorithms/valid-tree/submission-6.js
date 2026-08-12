class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // build graph as a adjacency list , use dfs or bfs in it , to detect cycle 

        if (edges.length > n-1) {
            return false;
        }


        const graph = Array.from({length: n},() => []);

        for (let [u,v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }


        // use dfs 

        const visited = new Set();

        function dfs(node,parent) {

            if (visited.has(node)) {
                return false;
            }

            visited.add(node);
            
            for (let neigh of graph[node]) {
                if (neigh === parent) {
                    continue;
                }
                
                if (!dfs(neigh,node)) {
                    return false;
                }
            }
            return true;
        }

        return dfs(0,-1) && visited.size === n;

    }
}
