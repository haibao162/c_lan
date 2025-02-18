// 将一个字符串经过删除，添加，替换，调整为另一个字符串的最小次数
function edit(str1 = [], str2 = []) {
    let dp =[];
    let length1 = str1.length;
    let length2 = str2.length;
    for (let i = 0; i <= length1;i++) {
        dp[i] = []
        dp[i][0] = i // 加入一行和一列，可以当做是空字符串
    }
    for (let j = 0; j <= length2;j++) {
        dp[0][j] = j;
    }
    for (let i = 1;i <= length1;i++) {
        for (let j = 1; j <= length2;j++) {
            if (str1[i-1] == str2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
            }

        }
    }
    console.log(dp[length1][length2])
}
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
edit("horse",'ros') // 
edit("intention",'execution') // 5
edit("kitten",'sitting') // 3

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
// "kitten" 和 "sitting" 为3，
// kitten -> sitten (将 'k' 替换为 's')
// sitten -> sittin (将 'e' 替换为 'i')
// sittin -> sitting (在末尾插入 'g')
