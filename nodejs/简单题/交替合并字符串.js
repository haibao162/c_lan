// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

// 返回 合并后的字符串 。

// 示例 1：

// 输入：word1 = "abc", word2 = "pqr"
// 输出："apbqcr"
// 解释：字符串合并情况如下所示：
// word1：  a   b   c
// word2：    p   q   r
// 合并后：  a p b q c r
// 示例 2：

// 输入：word1 = "ab", word2 = "pqrs"
// 输出："apbqrs"
// 解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
// word1：  a   b 
// word2：    p   q   r   s
// 合并后：  a p b q   r   s
// 示例 3：

// 输入：word1 = "abcd", word2 = "pq"
// 输出："apbqcd"
// 解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
// word1：  a   b   c   d
// word2：    p   q 
// 合并后：  a p b q c   d

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len1 = word1.length
    let len2 = word2.length
    let min = Math.min(len1, len2)
    // let max = Math.max(len1, len2)
    let i = 0
    let result = []
    // 每次循环加2个值
    while (i < min) {
        result.push(word1[i])
        result.push(word2[i])
        i++
    }
    if (len1 > min) {
        for (let i = min;i < len1;i++) {
            result.push(word1[i])
        }
    }
    if (len2 > min) {
        for (let i = min;i < len2;i++) {
            result.push(word2[i])
        }
    }
    console.log(result)
    return result.join('')
};

word1 = "abc", word2 = "pqr"

mergeAlternately(word1, word2)

// while (i < m || j < n) {
//     if (i < m) {
//         ans.push(word1[i]);
//         ++i;
//     }
//     if (j < n) {
//         ans.push(word2[j]);
//         ++j;
//     }
// }

