/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');

    for(let i = 0; i< words.length; i++){
        words[i] = words[i].split('').reverse().join('');
    }
    
    return words.join(' ');
};

