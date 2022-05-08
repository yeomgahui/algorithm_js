/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) {
        return true
    }
    let start = 0
    let end = Math.floor(num / 2)
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (mid * mid === num) {
            return true
        } else if (mid * mid < num) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
};
