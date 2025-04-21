/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组，并返回该子数组的长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

// var minSubArrayLen = function(target, nums = []) {
//     // const target1 = nums.sort((x, y) => x - y);
//     const target1 = nums;
//     let ans = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < target1.length; i++) {
//         let sum = 0;
//         for (let j = i; j < target1.length; j++) {
//             sum += target1[j];
//             if (sum >= target) {
//                 ans = Math.min(ans, j - i + 1);
//                 if (ans == 7) {
//                     console.log(i, j, sum, target1[i], target1[j])
//                 }
//                 break;
//             }
//         }
//     }
//     return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
// };

// target = 213
// nums = [12,28,83,4,25,26,25,2,25,25,25,12]
// console.log(minSubArrayLen(target, nums));

// 每一轮迭代，将 nums[end] 加到 sum，如果 sum≥s，则更新子数组的最小长度（此时子数组的长度是 end−start+1），
// 然后将 nums[start] 从 sum 中减去并将 start 右移，直到 sum<s，在此过程中同样更新子数组的最小长度。
// 在每一轮迭代的最后，将 end 右移。

// 1 2 3 4   5 6 7

var minSubArrayLen = function(target, nums = []) {
    let start = 0, end = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    while (end < nums.length) {
        sum += nums[end];
        // if (sum >= target) {
            
        // }
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

target = 213
nums = [12,28,83,4,25,26,25,2,25,25,25,12]
console.log(minSubArrayLen(target, nums));