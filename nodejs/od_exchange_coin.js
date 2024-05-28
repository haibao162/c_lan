// 给定一个零钱兑换的例子，其中有不同面额的零钱，如1元，5元，10元，
// 求解如何用这些零钱兑换一个给定的金额，并打印出所有可能的兑换方案。
const coins = [1, 2, 5]; // 面额
const amount = 5; // 总额
// 类似于数结构
const arr = [];
function dfs(amount, depth = []) {
    if(amount == 0) {
        arr.push(depth);
    } else if(amount > 0) {
        for(let coin of coins){
            if(amount - coin >= 0) {
                dfs(amount - coin, [...depth, coin]);
            }
        }
    }
}
dfs(amount);
console.log(arr);