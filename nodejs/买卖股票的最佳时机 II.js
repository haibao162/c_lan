// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。
// 示例 1：

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。
// 示例 2：

// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 最大总利润为 4 。

//        没有股票	              有股票
// 0	    0	                   -1
// 1	    0	                   -1
// 2	Max(0, -1 +2) = 1	Max(-1,  0 - 2) = -1
// 3	Max(-1 + 3, 1) = 2	Max(-1,  1 - 3) = -1
// 4	Max(-1 + 4, 2) = 3	Max(-1,  2 - 4) = -1
// 5	Max(-1 +5, 3) = 4 	Max(-1, 3 - 5) = -1

// 示例 3：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。

// 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润，dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润                                                                                                                里持有一支股票的最大利润（i 从 0 开始）。
// dp[i][0]=max{dp[i−1][0],dp[i−1][1]+prices[i]}                                                                                                                                                                                             
// dp[i][1]=max{dp[i−1][1],dp[i−1][0]−prices[i]}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = []
    let length = prices.length
    for(let i = 0;i <= prices.length;i++) {
        dp[i] = []
    }
    dp[0][0]= 0 //没有股票，利润为0
    dp[0][1] = -prices[0] // 有第一个股票，利润为-prices[0]
    for (let i = 0;i < prices.length;i++) {
        // 当前没有股票，要么是没有买股票，用的上一次没有股票的最大利润，要么是上一次有股票，这次卖了获取利润。取较大的值
        dp[i + 1][0] = Math.max(dp[i][0], dp[i][1] + prices[i])
        dp[i + 1][1] = Math.max(dp[i][1], dp[i][0] - prices[i])
    }
    // console.log(dp)
    const result = Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1])
    return result
};

prices = [1,2,3,4,5]
maxProfit(prices)

// var maxProfit = function(prices) {
//     let ans = 0;
//     let n = prices.length;
//     for (let i = 1; i < n; ++i) {
//         ans += Math.max(0, prices[i] - prices[i - 1]);
//     }
//     return ans;
// };

                                   
