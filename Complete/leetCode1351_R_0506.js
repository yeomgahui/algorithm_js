/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result = 0;
    for(let index of grid){
        result += binarySearch(result, index);
    }
    return result;
};

function binarySearch(result, array){
    let startIndex = 0;
    let endIndex = array.length-1;
    
    while(startIndex < endIndex){
        const mid = startIndex + Math.floor((endIndex - startIndex)/2);
        if(array[mid] < 0){ //mid 가 0보다 작을 경우
            endIndex = mid;
        }else {
            startIndex = mid+1;
        }
    }

    return array[startIndex] < 0 ? array.length-startIndex : 0;
}
