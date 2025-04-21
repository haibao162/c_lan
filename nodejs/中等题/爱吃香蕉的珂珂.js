// 珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

// 珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

 

// 示例 1：

// 输入：piles = [3,6,7,11], h = 8
// 输出：4
// 示例 2：

// 输入：piles = [30,11,23,4,20], h = 5
// 输出：30
// 示例 3：

// 输入：piles = [30,11,23,4,20], h = 6
// 输出：23

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 超时
// var minEatingSpeed = function(piles, h) {
//     let maxSpeed = Math.max.apply(null, piles)  // 最大值
//     let result = 0
//     for(let i = 1;i <= maxSpeed; i++) {
//         let total = 0
//         for(let j = 0;j < piles.length;j++) {
//             total += Math.ceil(piles[j] / i)
//             if (total > h) {
//                 break
//             }
//         }
//         if (total <= h) {
//             result = i
//             break
//         }
//     }
//     return result
// };

// 二分查找，最小值是1，最大值是piles里的最大值。先考虑中间值是否可以在h小时内吃完，
// 如果可以，将中间值调整为中间值和piles最大值的中间
// 如果中间值吃不完，说明要往下调整，将中间值调整为1和中间值的中间
var minEatingSpeed = function(piles, h) {
    let maxSpeed = Math.max.apply(null, piles)  // 最大值
    let result = 0
    let mid = Math.floor((1 + maxSpeed) / 2)
    let start = 1
    let end = maxSpeed
    // console.log(mid, 'maxSpeed')
    while(mid >= start && mid <= end) {
        let total = 0
        for(let j = 0;j < piles.length;j++) {
            total += Math.ceil(piles[j] / mid)
        }
        // 太小了吃不完，start更新为mid，mid更新为(mid + end)/2
        if (total > h) {
            if (start === mid) {
                start++
            } else {
                start = mid
            }
            // start 2 end 4 mid 3, 此时start更新为3，mid为4
            mid = Math.ceil((mid + end) / 2)
        } else {
            // 能吃完，在往小的值找找看
            // start 2 end 4 mid 3, 此时end更新为3，mid为2
            result = mid
            if (end === mid) {
                break
            }
            end = mid
            mid = Math.floor((start + end) / 2)
        }
        // start 2 end 3 mid 2，往右更新，start 2 mid 3

    }
    return result
};

piles = [3,6,7,11], h = 8
// piles = [2, 2], h = 2
console.log(minEatingSpeed(piles, h))