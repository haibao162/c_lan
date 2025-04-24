// 给你一个二进制数组 nums ，你需要从中删掉一个元素。

// 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

// 如果不存在这样的子数组，请返回 0 。

// 提示 1：

// 输入：nums = [1,1,0,1]
// 输出：3
// 解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
// 示例 2：

// 输入：nums = [0,1,1,1,0,1,1,0,1]
// 输出：5
// 解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
// 示例 3：

// 输入：nums = [1,1,1]
// 输出：2
// 解释：你必须要删除一个元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 「以第 i−1 位结尾的最长连续全 1 子数组」和「以第 i+1 位开头的最长连续全 1 子数组」的长度分别是多少，
// 这两个量的和就是删除第 i 位之后最长的且只包含 1 的非空子数组的长度。

// var longestSubarray = function(nums) {
//     let length = nums.length
//     let pre = new Array(length)
//     let suf = new Array(length)

//     pre[0] = nums[0]
//     for (let i = 1; i < length;i++) {
//         if (nums[i] != 0) {
//             pre[i] = pre[i - 1] + 1
//         } else {
//             pre[i] = 0
//         }
//     }

//     suf[length - 1] = nums[length - 1]
//     for (let j = length - 2; j >= 0;j--) {
//         if (nums[j] != 0) {
//             suf[j] = suf[j + 1] + 1
//         } else {
//             suf[j] = 0
//         }
//     }
//     let ans = 0
//     for (let i = 0;i < length; i++) {
//         let preSum = i === 0 ? 0 : pre[i - 1]
//         let sufSum = i === length - 1 ? 0 : suf[i + 1]
//         ans = Math.max(ans, preSum + sufSum)
//     }
//     console.log(ans, 'ans')
//     return ans
// };

// 用两个数组保存长度，p_0和pre一样，保存最长的连续全1的一个数组，即p_0[5] = 2表示第5个元素前面有2个连续的1
// p_1表示可以在某个位置删除一个0的最长连续全1的数组。
// 当我们遇到 1 时，p1(i) 的递推式与 p0(i) 相同；而当我们遇到 0 时，由于 p1(i) 允许删除一个 0，那么我们可以把这个 0 删除，将 p 
// 0(i−1) 的值赋予 p1(i)。

var longestSubarray = function(nums) {
    let ans = 0
    let p0 = 0, p1 = 0
    for (let i = 0; i < nums.length;i++) {
        // 初始化
        if (i == 0) {
            p0 = nums[i]
            p1 = nums[i]
        } else if (nums[i] === 0) {
            p1 = p0 // 由于p1表示允许删除一个0，所以p1此时等于p0，即nums[i]前面连续的1的个数
            p0 = 0 // 连续的1的个数变成0
        } else {
            p1++
            p0++
        }
        ans = Math.max(ans, p1)
    }
    if (ans == nums.length) {
        ans--
    }
    
    return ans
};


nums = [0,1,1,1,0,1,1,0,0,1,1,1]
// nums = [0,1,1,1,0,1,1]
// nums = [1,1,0,1]

// nums = [0,1,1,1,0,1,1,0,1]
// nums = [0,0,0,1,1,0,1]
console.log(longestSubarray(nums))
