// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
// 解释：需要合并 [1] 和 [] 。
// 合并结果是 [1] 。

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
var merge = function(nums1, m, nums2, n) {
    let left = nums1.slice(0,m)
    let right = nums2.slice(0,n)
    result = [...left, ...right]
    result = result.sort((x, y) => x - y)
    for (let i = 0;i < m + n - 1;i++) {
        nums1[i] = result[i]
    }

    // console.log(num)
    
};

// a = [3,2,1,4]
// console.log(a.sort((x, y) => x - y))

nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
