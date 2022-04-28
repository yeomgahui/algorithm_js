/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    let childIndex = 0;
    g.sort(compareNumber);
    s.sort(compareNumber);

    s.forEach(element => {
        if(element >= g[childIndex]){
            result++;
            childIndex++;
        }
    })
    return result;
};

function compareNumber(a,b){
    return a-b;
}
