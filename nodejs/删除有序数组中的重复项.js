// 示例 1：

// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
// 示例 2：

// 输入：nums = [0,0,1,1,1,1,2,3,3]
// 输出：7, nums = [0,0,1,1,2,3,3]
// 解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNum;
    let count = 0
    for (let i = 0;i<nums.length;i++) {
        if (nums[i] != currentNum) {
            currentNum = nums[i]
            count = 1
        } else {
            // 第三个重复的
            if (count == 2) {
                let j = i; // j = 4  j = 6
                // console.log(j, '1')
                while (nums[i] == nums[j]) {
                    j++
                }
                let deleteCnt = j - i // 删除个数
                nums.splice(i, j - i)
                i = i - (j - i) - 1
                // console.log(j, '2')

                count = 0
            } else {
                count++
            }
            
        }
    }
    console.log(nums)
    return nums.length
};

let nums = [0,0,1,1,1,1,2,3,3]

removeDuplicates(nums);

// a = [2,2,3,4,5]

// for(let i = 0;i < a.length;i++) {

//     console.log(i, a[i],'111')
//     if(a[i] == 2) {
//         a.splice(i,2)
//         i = i - 1
//     }

// }

// console.log(a)
// 0 2 111
// 0 3 111
// 1 4 111
// 2 5 111
// [ 3, 4, 5 ]