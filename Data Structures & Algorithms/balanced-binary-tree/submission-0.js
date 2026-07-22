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
     * @return {boolean}
     */
    isBalanced(root) {
        // If our DFS returns -1, the tree is unbalanced. Otherwise, it's balanced!
        return this.dfs(root) !== -1;
    }

    dfs(node) {
        // Base case: an empty tree is balanced and has a height of 0
        if (!node) return 0;

        // Check left subtree
        let leftHeight = this.dfs(node.left);
        if (leftHeight === -1) return -1; // Left subtree is unbalanced, abort!

        // Check right subtree
        let rightHeight = this.dfs(node.right);
        if (rightHeight === -1) return -1; // Right subtree is unbalanced, abort!

        // If the height difference between left and right is > 1, this node is unbalanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Otherwise, return the actual height of this tree to its parent
        return 1 + Math.max(leftHeight, rightHeight);
    }
}