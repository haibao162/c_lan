// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
 

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let splitRows = numRows - 1 // z字形占用的列数
    let i = 0
    let column = 0
    let result = []
    for(let s = 0;s < numRows;s++) {
        result[s] = []
    }
    console.log(result)
    while (i < s.length) {
        let currentColumn
        if (splitRows === 0) {
            currentColumn = 0
        } else {
            currentColumn = column % splitRows
        }
        if (currentColumn === 0) {
            for (let j = 0;j < numRows;j++) {
                result[j][column] = s[i]
                i++
            }
            column++
        } else {
            // 3 - 1: 考虑result[2]， 3 - 2：考虑result[1]
            result[splitRows - currentColumn][column] = s[i]
            i++
            column++
        }
    }
    console.log(result)
    let str = ''
    for(let i = 0;i < numRows;i++) {
        str += result[i].join('')
    }
    console.log(str)
    return str
};

// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
s = 'PAYPALISHIRING'
numRows = 4

s = 'A'
numRows = 1
convert(s, numRows)