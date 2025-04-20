// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // const result = twoSum([1,2,3,4,5], 6)
    let target = []
    nums = nums.sort((x,y) => x - y)
    console.log(nums, 'nums')
    if(nums.length < 3) {
        return []
    }
    for (let i = 0;i < nums.length - 2;i++) {
        // const result = twoSum([1,2,3,4,5], 6)
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        // console.log(nums.slice(i+1), 'nums.slice(i+1)')

        const result = twoSum(nums.slice(i+1), 0 - nums[i])
        if (result.length) {
            for(let j = 0;j< result.length;j++) {
            target.push([nums[i], ...result[j]])
            }
        }

    }
    console.log(target)
    return target
};

// 找两数之和
var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length - 1
    let result = []
    while(start < end) {
        if (start > 0 && numbers[start] === numbers[start - 1]) {
            start++
            continue
        }
        if (end < numbers.length - 1 && numbers[end] === numbers[end + 1]) {
            end--
            continue
        }
        if (numbers[start] + numbers[end] === target) {
            result.push([numbers[start], numbers[end]])
            start++
            end--
        } else if (numbers[start] + numbers[end] < target) {
            start++
        } else {
            end--
        }
    }
    return result
    
};

nums = [-1,0,1,2,-1,-4]
nums = [0,0,0]
nums = [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]
// nums = [-1, -1, 0, 1]

threeSum(nums)

// const result = twoSum([1,2,3,4,5], 6)
// const result = twoSum([0,0], 0)
// console.log(result)

