/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let result = duration;
    
    for(let i = 0; i< timeSeries.length-1; i++){
        let interval = timeSeries[i+1] - timeSeries[i];
        if(interval < duration){
            result += interval;
        }else {
            result += duration;
        }
    }
    
    return result;
};
