/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return recursive(root, 0, targetSum);
};
function recursive(root, currentSum, targetSum){
    if(!root) return false;
    
    currentSum += root.val;
    if(!root.left && !root.right){
        return currentSum === targetSum;
    }
    
    return recursive(root.left, currentSum, targetSum) || recursive(root.right, currentSum, targetSum);
}
