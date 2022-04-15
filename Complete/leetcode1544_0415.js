/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    //대문자 인지 확인 하는 코드
    function isUpperCase(char){
        return char === char.toUpperCase();
    }
    
    function isSameAlphabet(char1, char2){
        return char1.toUpperCase() === char2.toUpperCase();
    }
    // 현재 문자가 대/소문자인지 판별,
    // 다음 문자도 대/소문자인지 판별,
    // 현재 문자 : 소문자 => 다음문자 : 대문자 / 같은 알파벳이면 제거
    // 현재 문자 : 대문자 => 다음 문자 : 소문자 / 같은 알파벳이면 제거
    for(let i =0; i<s.length-1;){
        if(isUpperCase(s.charAt(i+1)) !== isUpperCase(s.charAt(i)) && isSameAlphabet(s.charAt(i), s.charAt(i+1))) {
            const removeContents = s.substring(i,i+2);
            s = s.replace(removeContents,'');
            i--;
            continue;
        }
        i++;
    }
    
    return s;
};
