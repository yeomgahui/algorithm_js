/**
 * @param {number} n
 * @return {number}
 */
var fib = function(number) {
    const result = 0;
    const pb = [];
        if(number === 0) return 0;
        if(number === 1) return 1;
        if(pb[number]) return pb[number];
        return pb[number] = fib(number-1) + fib(number-2);
    
};
