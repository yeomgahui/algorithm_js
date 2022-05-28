/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// BFS
var isUnivalTree = function(root) {
    const queue = [root];
    let prev = root.val;
    while(queue.length ){
        const value = queue.shift();
        if(prev !== value.val) return false;
        
        if(value.left) queue.push(value.left);
        if(value.right) queue.push(value.right);
    }
    return true;
};
