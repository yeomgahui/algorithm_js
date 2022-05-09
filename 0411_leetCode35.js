/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length -1;
    while(startIndex < endIndex){
        let mid = parseInt((startIndex+endIndex)/2);
        if(nums[mid] === target) return mid;
        nums[mid] > target ? endIndex = mid : startIndex = mid+1;
    }
    if(startIndex === endIndex){
        return nums[endIndex] >= target ? endIndex: endIndex+1;
    }
    
};
