var intersect = function(nums1, nums2) {
    let smaller  = [];
    let larger = [];
    let result = [];
    let lastsearched = -1;
    

    if((nums1.length < nums2.length) || nums1.length === nums2.length){
        smaller = nums1;
        larger = nums2;
    }else{
      larger = nums1;
        smaller = nums2;
    }
    
    smaller.sort((a,b) => a - b);
    larger.sort((a,b) => a - b);

    for(let num of smaller){
     let index = binarySearch( num, larger);
        if(index != -1){
            result.push(num);
            larger.splice(index,1);
        }
    }
    
    return result;
};

function binarySearch(target, sortedArray){
    let start = 0;
    let end = sortedArray.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(sortedArray[mid] === target) return mid;

        if(sortedArray[mid] < target){
           start = mid+1;
           }else{
              end = mid-1;
        }
    }
    return -1;
}
