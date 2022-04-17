/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = [];
    
    return Math.min(calcul(cost.length-1), calcul(cost.length-2));
    
    function calcul(index){
        if(index === 0 || index === 1) return cost[index];
        if(memo[index]) return memo[index]; 
        
        return memo[index] = Math.min(calcul(index-1), calcul(index-2))+cost[index];
    };
};
