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
var sumRootToLeaf = function(root) {
    const resultArray = [];
    let bits = '';
    sumOfBinary(root, '');
    
    function sumOfBinary(node, content){
        content = content.concat(node.val);
        if(node.left){
           sumOfBinary(node.left,content);
        }
        if(node.right){
            sumOfBinary(node.right, content);
        }
        if(!node.left && !node.right){
            return resultArray.push(content);
        }
    }
    let result = 0;
    for(binary of resultArray){
        result += parseInt(binary,2);
    }
    return result;
    
};
