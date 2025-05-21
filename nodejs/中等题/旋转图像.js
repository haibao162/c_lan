// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 输入：matrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]]
// 输出：[[7,4,1],
//         [8,5,2],
//         [9,6,3]]

// 输入：matrix = [[5,1,9,11],
//                 [2,4,8,10],
//                 [13,3,6,7],
//                 [15,14,12,16]]
// 输出：[[15,13,2,5],
//         [14,3,4,1],
//         [12,6,8,9],
//         [16,7,10,11]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 考虑遍历，按逆时针方向遍历，就是所求 i从 4到0
// var rotate = function(matrix) {
//     const row = matrix.length
//     const col = matrix[0].length

//     let i = 0
//     let j = 0
//     let result = []
//     t = []
    
//     for (i = 0;i < col;i++) {
//         for(j = row - 1;j >= 0;j--) {
//             t.push(matrix[j][i])
//         }
//     }

//     let index = 0
//     for (i = 0;i < row;i++) {
//         result[i] = []
//         for(j = 0;j < col;j++) {
//             matrix[i][j] = t[index]
//             index++
//         }
//     }
//     console.log(matrix)
    
// };
// matrix_new[j][n - i - 1] = matrix[i][j];

var rotate = function(matrix) {
    console.log(matrix, '1')
    let temp
    const n = matrix.length
    for (let i = 0;i < (n/2);i++) {
        for (let j = 0;j < Math.floor(n/2);j++) {
            temp = matrix[i][j]
            // [0][1]位置等于[n-1-1][0]位置
            matrix[i][j] = matrix[n-1-j][i]
            // [1][0]位置等于[n-0-1][1]
            matrix[n-1-j][i] = matrix[n-i-1][n-1-j]
            // [n-1][1]位置等于[n-1-1][n-1]
            matrix[n-i-1][n-1-j] = matrix[j][n-i-1]
            // [1][n-1-0]位置等于[0][1]位置
            matrix[j][n-i-1] = temp
        }
    }
    // [0][1] <- [2][0] <- [3][2] <- [1][3]
    // console.log(matrix, '2')
}

// 顺时针旋转90度
// a[0][0]放入a[0][3],  a[0][1]放入a[1][3]  a[0][2]放入a[2][3]
matrix = [[5,1,9,11],
            [2,4,8,10],
            [13,3,6,7],
            [15,14,12,16]]
rotate(matrix)
