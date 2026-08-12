/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

/*

{node: val, neighbors : [1,2,3]};


{node:val ,neighbours : []}

*/


class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        const visited = new Map();

        if (!node) return null;

        function dfs(node) {

            if (visited.has(node)) return visited.get(node);

            const clone = new Node(node.val);

            visited.set(node,clone);

            for (let n of node.neighbors) {  
                clone.neighbors.push(dfs(n))
            }

            return clone;

        }

        return dfs(node);

    }
}
