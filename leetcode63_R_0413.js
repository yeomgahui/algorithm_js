/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length; //세로 길이 (row)
    const n = obstacleGrid[0].length; // 가로 길이 (col)
    const memo = new Map();
    
    return topDown(m-1, n-1);
    
    function topDown(row, col){
        //기본 조건,
        if(row < 0 || col < 0 || obstacleGrid[row][col] === 1) return 0;
        if(row === 0 && col === 0) return 1;
        
        const key = `${row},${col}`;
        if(memo.has(key)) return memo.get(key);
        const res = topDown(row,col-1) + topDown(row-1, col);
        memo.set(key, res);
        
        return res;
    }

};
