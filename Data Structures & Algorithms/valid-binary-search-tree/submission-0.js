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


/*
1 2 3 4 5 8 7
        p N

  N <= p
*/


class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        let prev = -Infinity;

        function dfs(node) {
            if (!node) return true;

            // travers left

            if (!dfs(node.left)) return false;

            // node check

            if (node.val <= prev) {
                return false;
            }

            prev = node.val;

            // traverse right
            if (!dfs(node.right)) return false;

            return true;


        }

        return dfs(root);


    }
}
