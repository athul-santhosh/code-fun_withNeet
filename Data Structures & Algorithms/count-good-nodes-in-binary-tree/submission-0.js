/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let countOfGoodNodes = 0;

        function dfs(node, maxValueOfNode) {

            if (!node) return;

            if (node.val >= maxValueOfNode) {
                countOfGoodNodes++;
                maxValueOfNode = node.val;
            }

            dfs(node.left, maxValueOfNode);
            dfs(node.right, maxValueOfNode);

        };

        dfs(root, root.val);

        return countOfGoodNodes;

    }
}
