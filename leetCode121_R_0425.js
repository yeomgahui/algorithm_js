/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let maxProfit = 0;
    let sellPrice = prices[0];
    for(price of prices){
        maxProfit = Math.max(price - sellPrice, maxProfit);
        sellPrice = Math.min(sellPrice, price);
    }
    return maxProfit;
};
