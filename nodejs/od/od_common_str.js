const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let str1,str2;
rl.on('line', function (line) {
    arr.push(line);
    if (arr.length == 2) {
        str1 = arr[0];
        str2 = arr[1];
        commonStr(str1, str2);
    }
});
// y a a x  和 z a x y 

// 连续的最大公共子序列，两个片段的末尾不相等，则认为是0，如果相等则dp[i][j] = dp[i-1][j-1]+1。最后计算二维数组中最大值。
function commonStr(m, n) {
    // 当i或j为0时，i-1或j-1为-1，所以构造的二维数组加1列和1行，初始值记为0。子序列的比较从[1,1]到[n+1,m+1]算。
    const dp = [];
    let maxLength = 0;
    // 初始化数组记录
    for (let i = 0; i <= m.length; i++) {
        dp[i] = [0];
        if (i == 0) {
            for (let j = 1; j <= n.length; j++) {
                dp[i].push(0);
            }
        }
    }
    for (let i = 1; i <= m.length; i++) {
        for (let j = 1; j <= n.length; j++) {
            if (m[i - 1] == n[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }
    console.log(maxLength);
}