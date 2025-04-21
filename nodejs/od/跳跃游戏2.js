// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2

// [1,2,3,4,5,6,7,8,9,10]
// 5,6,7,8,9 都可以跳跃一次到10

// [1,2]

nums = [2,3,1,1,4]

// 贪心算法，从后向前找最远的那个位置
var jump = function(nums) {
    let position = nums.length - 1
    let steps = 0
    while (position > 0) {
        for (let i = 0; i < position;i++) {
            if (i + nums[i] >= position) {
                position = i
                steps++
                break
            }
        }
    }
    return steps
};

// console.log(jump(nums))


// [2,3,1,2,4,2,3]
// 初始位置为下标0，从0出发，可跳到下标2。在下标可到达的位置中，下标1的值是3，下标2的值是1，下标1可以到达更远的位置，所以第一步到达下标1
// 第二步从下标1出发，nums[1]的值是3，最远可以到达下标4，此时考虑nums[2]=1，nums[3]=2，nums[4]=4三个值，下标4可以跳的更远，所以第二步选择下标4

nums = [2,3,1,2,4,2,3] 
var jump2 = function (nums) {
    let maxPos = 0, end = 0, steps = 0;
    for (let i = 0;i < nums.length - 1;i++) {
        maxPos = Math.max(i+ nums[i], maxPos) // 第1次取的就是nums[0]=2, 第2次看i=1和maxPos比较
        if (i == end) {
            end = maxPos
            steps++
        }
    }
    return steps
}

console.log(jump(nums))
