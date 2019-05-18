var maxProfit = function(prices, fee) {
    // dp
    // buy, sell
    // when you sell, you must include the fee
    // buy 可以不买，或者买，买的话，只能从sell，
    // sell 的话
    // 在第i天可以获得最大收益
    const sell = new Array(prices.length).fill(0);
    const buy = new Array(prices.length).fill(0);
    sell[0] = 0;
    buy[0] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
        sell[i] = Math.max(sell[i - 1], prices[i] + buy[i - 1] - fee);
    }
    return sell[prices.length - 1];
};

function call () {
    console.log(maxProfit([1,3,2,8,4,9],
        2));
}

module.exports = call;