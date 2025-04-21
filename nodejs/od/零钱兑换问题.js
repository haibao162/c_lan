// 计算兑换amount所需要的最少数量
// coins = [1,2,5], amount=5
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 2 + 2
// 5
const list = [];
function coinChange(coins, amount) {
    let dp = [];
    for(let i = 0;i < amount + 1;i++) {
        dp[i] = [100000]
    }
    dp[0] = 0;
    for(let i = 1;i < amount + 1;i++) {
        // let 
        // 兑换11元，找兑换11-1,11-2,11-5中最少得一次
        for (let j=0;j <= coins.length;j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    console.log(dp[amount])
}

// coinChange([1,2,5], 11)
// coinChange([1,2,5], 13)

// 计算有多少种组合
var change = function (amount, coins) {
    // let dp = [];
    // for(let i = 0;i < amount + 1;i++) {
    //     dp[i] = [0]
    // }
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    console.log(dp[amount]) // 一共有多少种组合
    // return dp[amount];
};

// change(5, [1,2,5])
// change(5, [1])
// change(5, [2])

var coins = [1, 2]
function dfs(amount, path=[]) {
    if (amount == 0) {
        console.log(path)
    } else if (amount > 0) {
        for(const coin of coins) {
            if (amount - coin >= 0) {
                dfs(amount - coin, [...path, coin])
            }
        }
    }
}
dfs(5)


