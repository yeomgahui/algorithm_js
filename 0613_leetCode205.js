const isIsomorphic = (s, t) => {
    let map = new Map(), set = new Set()
    for(let i = 0; i < s.length; i++){
        let sChar = s[i], tChar = t[i]
        if(map.has(sChar)){
            if(map.get(sChar) !== tChar)return false
        }else{
            if(set.has(tChar))return false
            map.set(sChar, tChar)
            set.add(tChar)
        }
    }
    return true
};
