// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = new Array(word2.length + 1)
    for (let i =0;i <= word2.length;i++) {
        dp[i] = [i]
    }
    for (let j =0;j <= word1.length;j++) {
        dp[0][j] = j
    }
    console.log(dp, 'dp1')

    for (let i = 0;i < word2.length;i++) {
        for (let j = 0;j < word1.length;j++) {
            if (word2[i] == word1[j]) {
                dp[i+1][j+1] = dp[i][j]
            } else {
                dp[i+1][j+1] = Math.min(dp[i][j], dp[i+1][j], dp[i][j+1]) + 1
            }
        }
    }
    console.log(dp, 'dp')
    return dp[word2.length][word1.length]
    
};

word1 = "intention", word2 = "execution"

// word1 = "horse", word2 = "ros"

console.log(minDistance(word1, word2))