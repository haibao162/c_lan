// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

 

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0;i < nums.length;i++) {
        if (map.get(target - nums[i]) > -1 && (nums[i] * 2 === target)) {
            
            return [map.get(nums[i]),i]
        } else {
            map.set(target - nums[i], i)
        }

    }
    console.log(map)
    let result = []
    for (let i = 0;i < nums.length;i++) {
        let item = map.get(nums[i])
        if(item > -1 && (nums[i] * 2 !== target)) {
            result.push(i)
        }
    }
    // console.log(result)
    return  result
};

nums = [2,7,11,15], target = 9
nums = [3,2,4], target = 6
// nums = [3,3], target = 6
nums = [1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], target = 11
console.log(twoSum(nums, target))

