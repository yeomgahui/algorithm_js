/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    let left = 0; 
    let right = nums.length-1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[right] === nums[mid]){
            right--;
        }else if(nums[right] > nums[mid]){ //오른쪽 오름차순 일때
                 if(target <= nums[right] && target > nums[mid]){
                     left = mid+1;
                 }else right = mid
        }else {
            if(target < nums[left] || target > nums[mid]){
                left = mid+1;
            }else {
                right = mid;
            }
        }
    }
    return nums[left] === target;
};

