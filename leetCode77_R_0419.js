/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    backtracking(1, []);
    
    
    function backtracking(index, box){
        if(box.length === k){
            result.push(box);
            return;
        } //return 조건 box의 사이즈가 k가 되면, return
        
        for(let i=index; i<= n; i++){
            backtracking(i+1,[...box, i]);
        }
        
    }
    return result;
};
