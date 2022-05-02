/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;
    
    while(start < end){
        let mid =  start + Math.floor((end-start)/2); //중간값
        if(arr[mid] < arr[mid+1]){
            start = mid+1;
        }else{
            end = mid;
        }
    }
    return start
};
