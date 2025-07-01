// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。



// 示例 1：

// 输入：x = 2.00000, n = 10
// 输出：1024.00000
// 示例 2：

// 输入：x = 2.10000, n = 3
// 输出：9.26100
// 示例 3：

// 输入：x = 2.00000, n = -2
// 输出：0.25000
// 解释：2-2 = 1/22 = 1/4 = 0.25

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) {
        return 1
    }
    if (n > 0) {
        let result
         result = digui(x, n)
        return Number(result.toFixed(5))

    }

    if (n < 0) {
        let result
        result = digui(x, -n)
        return Number((1 / result).toFixed(5))
    }
    
};

// 2 4 9 19 38 77
function digui(x, n) {
    if (n == 0) {
        return 1
    }
    if (n == 1) {
        return x
    }
    let n_2
    let y
    if (n % 2 == 0) {
        n_2 = n / 2
        y = digui(x, n_2)
        return y * y
    } else {
        n_2 = Math.floor(n / 2)
        y = digui(x, n_2)
        return y * y * x
    }

}

function quickMul(x, n) {
    let ans = 1.0
    let x_contribute = x
    let N = n
    while (N > 0) {
        console.log(x_contribute, 'x_contribute')
        x_contribute = x_contribute * x
        N = Math.floor(N / 2)

    }

}

var myPow = function(x, n) {
    if (n == 0) {
        return 1
    }
    quickMul(x, n)
}

x = 2, n = 77
console.log(myPow(x, n))

// ((1 * 2 * 2 * 2 + 1) * 2 + 1) * 2 * 2 + 1 = 77
// 2 ** 6 + 2 ** 3 + 2 ** 2 + 2 ** 0 = 77
// 1001101
