// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。


// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 构造数组L，里面存储每个值左边的乘积。
// 构造数组R，里面存储每个值右边的乘积。
// 遍历原数组，L[i] * R[i]表示第i个元素计算其他元素相乘的结果 

var productExceptSelf = function(nums) {
    let length = nums.length

    let L = new Array(length)
    let R = new Array(length)
    let answer = new Array(length)

    L[0] = 1 ;// 第一个元素左边没有元素，用1代替
    // L[i] = L[i - 1] * nums[i - 1], 即L[1] = 1 * nums[0] = nums[0]， 这样L[2] = nums[0] * nums[1]，
    // L[3] = nums[0] * nums[1] * nums[2]
    for (let i = 1;i < nums.length;i++) {
        L[i] = L[i - 1] * nums[i - 1]
    }

    R[length - 1] = 1 // 最后一个元素右边没有元素，用1代替
    // 假设数组有10个，R[9] = 1，R[8] = R[9] * nums[9] = nums[9]，R[7] = nums[8] * R[8]
    for (let i = length - 2;i >= 0;i--) {
        R[i] = nums[i + 1] *  R[i + 1]
    }

    for (let i = 0;i < nums.length;i++) {
        answer[i] = L[i] * R[i]
        if (answer[i] == -0) {
            answer[i] = 0 
        }
    }
    console.log(answer)

};

nums = [1,2,3,4]
nums = [-1,1,0,-3,3]

productExceptSelf(nums)

// class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int length = nums.length;
//         int[] answer = new int[length];

//         // answer[i] 表示索引 i 左侧所有元素的乘积
//         // 因为索引为 '0' 的元素左侧没有元素， 所以 answer[0] = 1
//         answer[0] = 1;
//         for (int i = 1; i < length; i++) {
//             answer[i] = nums[i - 1] * answer[i - 1];
//         }

//         // R 为右侧所有元素的乘积
//         // 刚开始右边没有元素，所以 R = 1
//         int R = 1;
//         for (int i = length - 1; i >= 0; i--) {
//             // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
//             answer[i] = answer[i] * R;
//             // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
//             R *= nums[i];
//         }
//         return answer;
//     }
// }
