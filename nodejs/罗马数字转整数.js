// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// XXXVIII 30 + 5 + 3    IX 9  
// XXXIX 30 + 9
// XL 40 XLI 41
// XLIX 40 + 9   L 50

// 给定一个罗马数字，将其转换成整数。
// 示例 1:

// 输入: s = "III"
// 输出: 3
// 示例 2:

// 输入: s = "IV"
// 输出: 4
// 示例 3:

// 输入: s = "IX"
// 输出: 9
// 示例 4:

// 输入: s = "LVIII"
// 输出: 58
// 解释: L = 50, V= 5, III = 3.
// 示例 5:

// 输入: s = "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let len = s.length
    let sum = 0
    let i = 0
    while (i < len) {
        const result = getNumber(s[i], s[i+1], s[i+2])
        sum += result.num
        i = i + result.length
    }
    console.log(sum)
    return sum
};

var getNumber = function(num1, num2, num3) {
    if (num1 === 'I') {
        if (num2 === 'I') {
            if (num3 === 'I') {
                return {num: 3, length: 3}
            } else {
                return {num: 2, length: 2}
            }
        } else if (num2 === 'V') {
            return {num: 4, length: 2} // IV 4
        } else if (num2 === 'X') {
            return {num: 9, length: 2} // IX 9
        } else {
            return {num: 1, length: 1} // I  1
        }
    } else if (num1 === 'V') {
        return {num: 5, length: 1} // V 5
    } else if (num1 === 'X') {
        if (num2 === 'L') {
            return {num: 40, length: 2} // XL 40
        } else if (num2 === 'C') {
            return {num: 90, length: 2} // XC 90
        } else {
            return {num: 10, length: 1} // X  10
        }
    } else if (num1 === 'L') {
        return {num: 50, length: 1} // L 50
    } else if (num1 === 'C') {
        if (num2 === 'D') {
            return {num: 400, length: 2} // CD = 400
        } else if (num2 === 'M') {
            return {num: 900, length: 2} // CM = 900
        } else {
            return {num: 100, length: 1} // C = 100
        }
    }
    else if (num1 === 'D') {
        return {num: 500, length: 1} // C = 100
    }
    else if (num1 === 'M') {
        return {num: 1000, length: 1} // M = 1000
    }
}

s = "LVIII"

s = "MCMXCIV" // 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.

s = "MCDLXXVI"
// 1476
// M = 1000, CD = 400

romanToInt(s)



// symbolValues = {
//     {'I', 1},
//     {'V', 5},
//     {'X', 10},
//     {'L', 50},
//     {'C', 100},
//     {'D', 500},
//     {'M', 1000},
// };
// int romanToInt(string s) {
//     int ans = 0;
//     int n = s.length();
//     for (int i = 0; i < n; ++i) {
//         int value = symbolValues[s[i]];
//         if (i < n - 1 && value < symbolValues[s[i + 1]]) {
//             ans -= value;
//         } else {
//             ans += value;
//         }
//     }
//     return ans;
// }
