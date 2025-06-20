// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = []
    for (let i = 0;i < nums.length;i++) {
        dp[i] = 1
    }
    for (let i = 0; i < nums.length;i++) {
        for (let j = 0;j < i;j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }
    console.log(dp, Math.max(...dp))
    return Math.max(...dp)
    
};

lengthOfLIS = function(nums) {
    let tails = []
    let res = 0
    for (let i = 0;i < nums.length;i++) {
        let left = 0, right = res
        while (left < right) {
            let middle = Math.floor((left + right) / 2)
            if (tails[middle] < nums[i]) {
                left = middle + 1
            } else {
                right = middle
            }
        }
        // left = right, tails[left]位置代表tails中比nums[i]大的最小数的位置，如tails是1,2,3,5,nums[i]=4,则tails[left]为5
        // 此时用4替换5,tails是1,2,3,4
        // 如果tails是1,2,3,4,nums[i]=5,则tails更新为1,2,3,4,5
        tails[left] = nums[i]
        // 最后一位插入nums[i],
        if (left == res) {
            res++
        }
    }
    console.log(res)
    return res

}

nums = [10,9,2,5,3,7,101,18]
// dp[0] = 1 dp[1] = 1 dp[2]=1 dp[3]= dp[2] + 1 = 2
// dp[4] = 2 dp[5] = 3

nums = [1,3,6,7,9,4,10,5,6]
// dp = 1 2 3 4 5 5 6
lengthOfLIS(nums)
