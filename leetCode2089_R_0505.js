/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const result = [];
    nums.sort((a,b)=> a-b);
    
    binarySearch(nums, target, 0, nums.length-1, result)
    
    return result.sort((a,b) => a-b);
};

function binarySearch(sortedArray, target, startIndex, endIndex, result){
    if(startIndex > endIndex) return;
    const mid = startIndex + Math.floor((endIndex - startIndex)/2);
    if(sortedArray[mid] === target){
        result.push(mid);
    }
    
    binarySearch(sortedArray, target, startIndex, mid-1, result);
    binarySearch(sortedArray, target, mid+1, endIndex, result);
}
