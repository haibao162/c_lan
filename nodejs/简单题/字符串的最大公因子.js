// 对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

 

// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"
// 示例 2：

// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"
// 示例 3：

// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // let res1 = str1.split('AB')
    // console.log(res1)
    // let res2 = str1.split('ABC')
    // console.log(res2)
    // console.log('AAAAAA'.split('A'))
    // console.log('ABAB'.split('AB'))
    if (str1.concat(str2) != str2.concat(str1)) {
        return ""
    }
    const len = gcd(str1.length, str2.length)
    return str1.substring(0,len)
    // console.log(gcd(6,4))

};

var gcd = function(a, b) {
    let remainder = a % b;
    while (remainder != 0) {
        a = b;
        b = remainder;
        remainder = a % b;
    }
    return b;
}

str1 = "ABCABC", str2 = "ABC"
console.log(gcdOfStrings(str1, str2))







// ax + by = c
// 6a + 4b = 2

// 16 = 10 + 6
// 10 = 6 + 4
// 6 = 4 + 2
// 4 = 2 * 2

// 回溯法
// 2 = 6 - 4 = 6 - (10 - 6) = 16 - 10 - (10 - (16 - 10)) = 16 - 10 - 10 + 16 - 10


// a = k * b + r1
// b = k1 * r1 + r2
// r1 = r2 + r3

// b = k1 * r1 + r1 - r3
// (b + r3)/ (k1 + 1) = r1
// a = k*b + b/ (k1 + 1) + r3/(k1 + 1) = (k + 1/(k1 + 1)) * b + 1/(k1 + 1) * r3
// r3写成了ax + by = r3的形式


