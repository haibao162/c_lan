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

class UnionFind {
  constructor(grid) {
    this.count = 0;
    this.parent = []
    this.rank = []

    let m = grid.length
    let n = grid[0].length
    this.parent = new Array(m * n).fill(0)
    this.rank = new Array(m * n).fill(0)
    for (let i = 0;i < m;i++) {
      for (let j = 0;j < n;j++) {
        if (grid[i][j] == '1') {
          this.parent[i * n + j] = i * n + j
          this.count++
        }
        this.rank[i * n + j] = 0
      }
    }
    // console.log(this.parent);
    // [
    //   0,  1,  2,  3,  4,
    //   0,  6,  7,  0,  0, 
    //   10, 0,  0,  0,  0,
    //   15, 0,  0, 18, 19
    // ]
  }

  // 路径压缩算法：https://www.runoob.com/data-structures/union-find-compress.html
  // 有5个节点0，1,2,3,4，他们父节点分别为0,0,1,2,3，则parent = [0,0,1,2,3]，调用find函数以后parent变为[0,0,0,0,0]
  find (i) {
    if (this.parent[i] != i) {
      this.parent[i] = this.find(this.parent[i])
    }
    return this.parent[i]
  }

  union(x, y) {
    let rootx = this.find(x)
    let rooty = this.find(y)
    // console.log(rootx, rooty, 'rootx')
    // 0 1 rootx
    // 0 6 rootx
    // 0 2 rootx
    // 0 7 rootx
    // 0 3 rootx
    // 0 4 rootx
    // 0 0 rootx
    // 10 15 rootx
    // 18 19 rootx
    if (rootx != rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty
      } else {
        this.parent[rooty] = rootx
        this.rank[rootx] += 1
      }
      this.count--
    }
  }
}

var numIslands = function(grid) {
  if (grid == null || grid.length == 0) {
    return 0
  }
  let nr = grid.length
  let nc = grid[0].length
  let num_islands = 0

  let uf = new UnionFind(grid)
  // console.log(uf.count, 'uf')
  for (let r = 0;r < nr;r++) {
    for (let c = 0;c < nc;c++) {
      if (grid[r][c] == '1') {
        grid[r][c] = '0'
        if (r - 1 >= 0 && grid[r-1][c] == '1') {
          uf.union(r * nc + c, (r-1) * nc + c);
      }
      if (r + 1 < nr && grid[r+1][c] == '1') {
          uf.union(r * nc + c, (r+1) * nc + c);
      }
      if (c - 1 >= 0 && grid[r][c-1] == '1') {
          uf.union(r * nc + c, r * nc + c - 1);
      }
      if (c + 1 < nc && grid[r][c+1] == '1') {
          uf.union(r * nc + c, r * nc + c + 1);
      }

      }

    }
  }

  console.log(uf.count);

    
};


var grid = [
    ["1","1","1","1","1"],
    ["0","1","1","0","0"],
    ["1","0","0","0","0"],
    ["1","0","0","1","1"]
]

console.log(numIslands(grid))