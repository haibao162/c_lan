// 给你一个字符串 s，找到 s 中最长的 回文 子串。


// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

/**
 * @param {string} s
 * @return {string}
 */
// 动态规划
// var longestPalindrome = function(s) {
//     let len = s.length
//     if (len < 2) {
//         return s;
//     }
//     let maxLen = 1
//     let begin = 0
//     let dp = []
//     for (let i = 0;i < len;i++) {
//         dp[i] = []
//         for (let j = 0;j < len;j++) {
//             dp[i][j] = false
//         }
//     }
//     // dp[i][j] 表示 s[i..j] 是否是回文串
//     for (let i = 0;i < len;i++) {
//         dp[i][i] = true
//     }
//     // console.log(dp)
//     L = 2
//     for (let L = 2;L <= len;L++) {
//         for (let i = 0;i < len;i++) {
//             let j = L + i - 1
//             if (j >= len) {
//                 break
//             }
//             if (s[i] != s[j]) {
//                 dp[i][j] = false
//             } else {
//                 if (j - i < 3) {
//                     dp[i][j] = true
//                 } else {
//                     dp[i][j] = dp[i+1][j-1]
//                 }
//             }
//             if (dp[i][j] && j - i + 1 > maxLen) {
//                 maxLen = j - i + 1
//                 begin = i
//             }
//         }
//     }
    
//     // console.log(dp)
//     // console.log(s.substring(begin, begin + maxLen))
//     return s.substring(begin, begin + maxLen)
    
// };

var longestPalindrome = function(s) {
    if (!s) {
        return ''
    }
    let start = 0, end = 0
    for (let i = 0;i < s.length;i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    // console.log(start, end)

    return s.substring(start, end + 1)
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--
        right++
    }
    return right - left - 1
}
// dp[i][j] = dp[i+1][j-1] and s[i] == s[j]
s = "babad"
// s = "cbbd"
console.log(longestPalindrome(s))