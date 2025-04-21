// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

// nums = [2,3,1,1,4]
// 考虑3,1。

// [3,0,3,4,5,6,7,8,9,10]

// [2,0,0,4,5,6,7,8,9,10]

nums = [2,3,1,1,4]

nums = [2,0,0,4,5,6,7,8,9,10]


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length
    let rightmost = 0
    for (let i = 0;i < nums.length;i++) {
        // 当前能到达的最远距离到达不了下标i，则不会更新rightmost。如第一个数就是0，rightmost就是取值0，表示能够到的位置就是nums
        // 里的第一个位置。第二次遍历的时候，i=1，rightmost < 1，说明到不了第二个位置，最后肯定是返回false
        if (rightmost >= i) {
            rightmost = Math.max(rightmost, i + nums[i])
        }
        if (rightmost >= n - 1) {
            return true
        }

    }
    return false
};

console.log(canJump(nums))
