// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 致谢：

// 特别感谢 @pbrother 添加此问题并且创建所有测试用例。

// 示例 1：
// 输入：s = "abc", t = "ahbgdc"
// 输出：true


/** *
 *  * @param {string} s
 * @param {string} t
 * @return {boolean}
 * */
// var isSubsequence = function(s, t) {
//     let i = 0;
//     let j = 0;
//     while (i < s.length && j < t.length) {
//         if (s[i] === t[j]) {
//             i++;
//             j++;
//         }
//         else {
//             j++;
//         }
//     }
//     return i === s.length;
// }

// s = "abc", t = "ahbgdc"
// console.log(isSubsequence(s, t))

// dp[i][j]表示s的前i个字符是否是t的前j个字符的子序列
// 输入：s = "abc", t = "ahbgdc"
// abb axxbxxb   a[1][1] = 1  a[1][2] = 1   a[1][3] = 1  a[1][4] = 1
// a[2][1] = 1  a[2][2] = 1   a[2][3] = 2 


var isSubsequence = function(s, t) {
    
}

// 令 f[i][j] 表示字符串 t 中从位置 i 开始往后字符 j 第一次出现的位置
// 1. 如果 t[i] == j，那么 f[i][j] = i；
// 2. 否则，f[i][j] = f[i+1][j]。
// 输入：s = "abc", t = "ahbgdc"
// f[3][6] = 3 f[2][5] = f[3][5] = 