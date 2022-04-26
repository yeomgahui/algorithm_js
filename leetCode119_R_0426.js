/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    
    const prevRow = getRow(rowIndex-1);
    const currentRow = [];
    for(let i = 0; i<=rowIndex; i++){
        if(i === 0 || i === rowIndex){
            currentRow.push(1);
        }else{
            currentRow.push(prevRow[i-1]+prevRow[i]);
        }
    }
    return currentRow;
};
