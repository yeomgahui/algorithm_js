/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result =[...words[0]];
    words.splice(0,1) //첫번째 index 값을 삭제 한다. (고려대상 x)
    
    for(word of words){
        //중복된 값을 제거한다.
        result = result.filter(alphabet => {
            if(word.includes(alphabet)){
                word = word.replace(alphabet, "");
                return true;
            }
        });
    }
    
    return result;
    
};
