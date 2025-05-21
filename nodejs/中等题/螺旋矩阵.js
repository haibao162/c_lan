// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 示例 1：
// 输入：matrix = [[1,2,3],
//                [4,5,6],
//                [7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 示例 2：
// 输入：matrix = [[1,2,3,4],
//                [5,6,7,8],
//                [9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    const rows = matrix.length
    const columns = matrix[0].length
    const nums = rows * columns
    const visited = []
    for (let m = 0;m < rows;m++) {
        visited[m] = []
        for (let n = 0;n < columns;n++) {
            visited[m][n] = false
        }
    }
    let i = 0
    let row = 0
    let col = 0
    let directions = [[0,1],[1,0],[0,-1],[-1,0]]
    let directionIndex = 0
    const order = []
    while(i < nums) {
        order.push(matrix[row][col])
        visited[row][col] = true
        let nextRow = row + directions[directionIndex][0]
        let nextCol = col + directions[directionIndex][1]
        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= columns || visited[nextRow][nextCol]) {
            directionIndex = (directionIndex + 1) % 4
        }
        row = row + directions[directionIndex][0]
        col = col + directions[directionIndex][1]
        i++
    }
    // console.log(order)
    return order
    
};

matrix = [[1,2,3],
               [4,5,6],
               [7,8,9]]
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

spiralOrder(matrix)


