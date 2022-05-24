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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};

//----------------------- BFS -----------------------------
var maxDepth = function(root) {
    if(!root) return 0;
    let queue = [{node: root, level: 1}], maxDepth = 0;
    while(queue.length > 0){
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if(node.left) queue.push({node: node.left, level: level+1});
        if(node.right) queue.push({node: node.right, level: level+1})
    }
    return maxDepth;
}
