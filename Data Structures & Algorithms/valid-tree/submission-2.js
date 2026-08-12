class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // Create graph 

        const graph = Array.from({length:n},() => []);

        for (let [i,o] of edges) {
            graph[i].push(o);
            graph[o].push(i);
        }

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
