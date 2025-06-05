// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
// 如果左括号数量不大于 n，我们可以放一个左括号。如果右括号数量小于左括号的数量，我们可以放一个右括号。
var generateParenthesis = function(n) {
    const ans = []
    const backtrack = function(S, left, right) {
        if (S.length == 2 * n) {
            // console.log(S, 'SSS')
            ans.push(S)
            return
        }
        if (left < n) {
            backtrack(S + '(', left + 1, right)
        }
        if (right < left) {
            backtrack(S + ')', left, right + 1)
        }
    }
    backtrack('', 0, 0)
    return ans
};

n = 3
generateParenthesis(n)