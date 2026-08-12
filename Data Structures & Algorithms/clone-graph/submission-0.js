/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const visited = new Map();

        function dfs(node) {

            if (visited.has(node)) {
                return visited.get(node);
            }

            const clone = new Node(node.val);

            visited.set(node,clone);

            // recursively fill the neighbors of clone

            for (let neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor))
            }

            return clone;

        }

        return dfs(node);
    }
}
