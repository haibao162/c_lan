// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let x = 0, y = height.length - 1
    let result = 0
    while (x < y) {
        let min = Math.min(height[x], height[y])
        let contain = min * (y - x)
        if (contain > result) {
            result = contain // 更新容器容量
        }
        if (height[x] > height[y]) {
            y--
        } else {
            x++
        }
    }
    return result
};

height = [1,8,6,2,5,4,8,3,7]

// 左边是x，右边是y，容量就是Math.min(x,y) * (y - x)
// 假设x < y，y向左移得到y2，由于Math.min(x,y2) <= Math.min(x - y), y2 - x < y - x。
// 所以y左移总是小于当前的容量，所以只考虑x右移一位。这样规模降低了一位。
console.log(maxArea(height))