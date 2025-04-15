/**
 * @param {character[][]} grid
 * @return {number}
 */
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：
// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

var numIslands = function(grid) {
  if (grid == null || grid.length == 0) {
    return 0
  }
  let nr = grid.length
  let nc = grid[0].length
  let num_islands = 0
  for (let r = 0;r < nr;r ++) {
    for(let c = 0;c < nc; c++) {
      if (grid[r][c] == '1') {
        num_islands++
        dfs(grid, r, c)
      }
    }
  }

  return num_islands
    
};

var dfs = function(grid, r, c) {
  let nr = grid.length
  let nc = grid[0].length

  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") {
    return;
  }
  grid[r][c] = '0'
  dfs(grid, r - 1, c)
  dfs(grid, r + 1, c)
  dfs(grid, r, c - 1)
  dfs(grid, r, c + 1)

}

// var grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]

var grid = [
  ["1","1","1","1","1"],
  ["0","1","1","0","0"],
  ["1","0","0","0","0"],
  ["1","0","0","1","1"]
]

console.log(numIslands(grid))