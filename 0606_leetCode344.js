/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// Two Pointer
var reverseString = function(s) {
    let startIndex = 0;
    let endIndex = s.length-1;
    while(startIndex < endIndex){
        let temp = s[startIndex];
        s[startIndex] = s[endIndex];
        s[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return s;
};

// ------------------------------------------
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// recursion
var reverseString = function(s) {
    if(s.length === 0) return;
    
    let temp = s.shift();
    reverseString(s);
    s.push(temp);
    
};
