nums = [10, 9, 2, 5, 3, 7, 101, 18]
function getMaxLength(nums) {
    let length = nums.length
    let dp = new Array(length).fill(1)
    for (let i = 0;i < length;i++) {
        for (let j = 0;j < i;j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    let max = Math.max(...dp)
    return max
}
// 进阶：二分查找，插入到arr中，arr的长度是最长子序列
function getMaxLength2(nums) {
    let length = nums.length
    let arr = []
    arr.push(nums[0])
    for (let i = 1;i < length;i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            let replaceId = binarySearch(arr, nums[i])
            arr[replaceId] = nums[i]
        }
    }
    return arr.length
}
// 大于target的最小值
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    let replaceId = 0 // 如果没有找到，则nums[i]比arr[0]要小
    while(left < right) {
        let mid = Math.floor(left + right)
        if (target < arr[mid]) {
            replaceId = mid
            right = mid  - 1
        } else if (target > arr[mid]) {
            left = mid + 1
        }
        
    }
    return replaceId
}
// console.log(getMaxLength2(nums))
console.log(getMaxLength(nums))

