// 中缀表达式，即日常的运算表达式，将他转化为中序遍历
// a + b * (c - d) + e/f
    //                    +
    //    +                    /
    // a        *            e   f
    //      b       -
    //           c     d

// 1 + 2 * (4 - 3) + 6/2
//                    +
    //    +                    /
    // 1        *            6   2
    //      2       -
    //           4     3

// 逆波兰式，又叫后缀表达式，将中缀表达式按照中序遍历生成的树，进行后序遍历，得到的就是后缀表达式：
// 1243-*+ 62/ +
// 12 1 *+ 62/ +
// 1  2 + 62/ +
// 3      62/ +
// 3 3 +
// 6

// 逆波兰求值：初始化一个栈，遇到操作数入栈，遇到运算符就从栈顶取两个数进行运算，直到遍历结束

// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

// 请你计算该表达式。返回一个表示表达式值的整数。

// 示例 1：

// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：

// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：

// 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for (let i = 0;i < tokens.length;i++) {
        if (isNum(tokens[i])) {
            stack.push(tokens[i])
        } else {
            let right = stack.pop()
            let left = stack.pop()
            let result = compute(left, right, tokens[i])
            // console.log(result, left, right)
            stack.push(result)
        }
    }
    return stack[0]
    
};

var isNum = function(char) {
    return char != '*' && char != '+' && char != '-' && char != '/'
}

var compute = function(left, right, operate) {
    left = Number(left)
    right = Number(right)
    if (operate == '+') {
        return left + right
    }
    if (operate == '-') {
        return left - right
    }
    if (operate == '*') {
        return left * right
    }
    if (operate == '/') {
        return parseInt(left / right)
    }
}

tokens = ["4","13","5","/","+"]

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

// 10 -198 / * 17 + 5 +


console.log(evalRPN(tokens))

