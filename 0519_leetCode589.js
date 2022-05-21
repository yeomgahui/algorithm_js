/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    return dfs(root, []);
    
};
var dfs = function (root, list){
    list.push(root.val);
    if(root.children){
        for(let i=0; i< root.children.length; i++){
            dfs(root.children[i],list);
        }
    }
    return list;
}
