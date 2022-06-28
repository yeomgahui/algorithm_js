var binaryTreePaths = function(root) {
    const result = [];
    preorder(root, '');
    
    return result;
    
    function preorder(rootNode, history){
        if(rootNode == null) return;
        history = history + rootNode.val;
        
        if(rootNode.left == null && rootNode.right == null){
            result.push(history);
            return;
        }
        history += "->";
        if(rootNode.left) preorder(rootNode.left, history);
        if(rootNode.right) preorder(rootNode.right, history);
    }
};
