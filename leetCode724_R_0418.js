/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let pastPivotNum = 0;
    nums.forEach(num=> rightSum += num);

    
    for(let i=0; i< nums.length-1; i++){
        rightSum = rightSum - nums[i];
        leftSum = leftSum + pastPivotNum;
        
        if(rightSum === leftSum){
            return i;
        }
        pastPivotNum = nums[i];
    }
    return -1;
    
};
