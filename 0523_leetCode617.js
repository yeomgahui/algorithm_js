/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// ---------------------------------------------- DFS --------------------------------------
var mergeTrees = function(root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1;
    
    root1.val += root2.val;
    
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};
// ---------------------------------------------- BFS --------------------------------------
const mergeTrees = function(root1, root2) {
    if (!root1) return root2
    if (!root2) return root1
    
    const res = root1
    
    const queue = []
    queue.push({v1:res, v2:root2}) 
    
    while (queue.length) {
        const {v1, v2} = queue.shift()
        v1.val += v2.val
        
        if (v1.left && v2.left) queue.push({v1:v1.left, v2:v2.left})
        if (!v1.left && v2.left) v1.left = v2.left
        
        if (v1.right && v2.right) queue.push({v1:v1.right, v2:v2.right})
        if (!v1.right && v2.right) v1.right = v2.right  
        
    }
    
    return res
     
};
