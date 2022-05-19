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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    treenode(root);
    function treenode(node){
        if(!node) return;
        if(!node.left && !node.right){
            result.push(node.val);
            return;
        }
        if(node.left){
            treenode(node.left);    
        }
        if(node.right){
            treenode(node.right);    
        }
        result.push(node.val);
    }
    return result;
};

//------------------------------------------------------------------------------
//0519 두번째 시도 성공
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    traversal(root);
    function traversal(root){
        if(!root) return;

        traversal(root.left);
        traversal(root.right);
        result.push(root.val);
    }
    return result;
};
