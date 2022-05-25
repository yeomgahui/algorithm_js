var maxDepth = function(root) {
    if(!root) return 0;
    let max = 0;
    for(let child of root.children) {
       max = Math.max(max, maxDepth(child));
    }
    return max + 1;
}

// -------------------------- BFS ---------------------------
var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 0;
    let queue = [{node : root, level: 1}];
    
    while(queue.length){
        let {node, level} = queue.shift();
        depth = Math.max(depth,level);
        for(let children of node.children){
            queue.push({node: children, level: level+1});
        }
    }
    return depth;
    
    
};
