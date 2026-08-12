class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        
        // if a valid tree , the length of the edges would be n-1;
        if (edges.length !== n-1) {
            return false;
        }

        const graph = new Map();

        // build the graph through adjaceny list

        for (let i=0; i < n; i++) {
            graph.set(i,[]);
        }

        for (let [dir,rev] of edges) {
            graph.get(dir).push(rev);
            graph.get(rev).push(dir);
        }

        // initialize a visited set 

        const visited = new Set();

        const checkCycles = (current, parent) => {

            // Already seen , so its essentialy forming a cycle
            if (visited.has(current)) {
                return false;
            }

            visited.add(current);

            for (const neighbour of graph.get(current)) {
                if (neighbour !== parent && !checkCycles(neighbour,current)) {
                    return false;
                }
            }
            return true;
        }

        return checkCycles(0,-1) && visited.size === n;

    }
}
