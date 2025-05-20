// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

// 输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
// 输出：4
// 示例 2：

// 输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
// 输出：-1
// 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。
// 示例 3：

// 输入：grid = [[0,2]]
// 输出：0
// 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。


/**
 * @param {number[][]} grid
 * @return {number}
 */
// 多源广度优先搜索，所有腐烂的橘子在广度优先搜索上等价于同一节点
// 假设这些腐烂橘子刚开始是新鲜的，而有一个腐烂橘子(我们令其为超级源点)会在下一秒把这些橘子都变腐烂，
// 而这个腐烂橘子刚开始在的时间是 −1 ，那么按照广度优先搜索的算法，下一分钟也就是第 0 分钟的时候，
// 这个腐烂橘子会把它们都变成腐烂橘子，然后继续向外拓展，所以其实这些腐烂橘子是同一层的节点。
// 那么在广度优先搜索的时候，我们将这些腐烂橘子都放进队列里进行广度优先搜索即可，
// 最后每个新鲜橘子被腐烂的最短时间 dis[x][y] 其实是以这个超级源点的腐烂橘子为起点的广度优先搜索得到的结果。

var orangesRotting = function(grid) {
    const rowLen = grid.length, colLen = grid[0].length
    // 控制上，左，下，右
    const dr = [-1, 0, 1, 0]
    const dc = [0, -1, 0, 1]
    const queue = []
    const depth = new Map()
    for (let r = 0; r < rowLen;r++) {
        for (let c = 0;c < colLen;c++) {
            // 查找腐烂的橘子
            if (grid[r][c] == 2) {
                const code = r * colLen + c
                queue.push(code)
                depth.set(code, 0)
            }
        }
    }

    let ans = 0
    while(queue.length !== 0) {
        const code = queue.shift()
        const r = Math.floor(code / colLen), c = code % colLen
        for (let k = 0;k < 4;k++) {
            const nr = r + dr[k] // 垂直方向坐标
            const nc = c + dc[k] // 水平方向坐标
            if (nr >= 0 && nr < rowLen && nc >= 0 && nc < colLen && grid[nr][nc] === 1) {
                grid[nr][nc] = 2
                const ncode = nr * colLen + nc
                queue.push(ncode)
                depth.set(ncode, depth.get(code) + 1)
                ans = depth.get(ncode)
            }
        }
    }
    console.log(grid)
    for (let r = 0;r < rowLen;r++) {
        for (let c = 0;c < colLen;c++) {
            if (grid[r][c] == 1) {
                return -1
            }
        }
    }
    return ans

};

grid = [[2,1,1],[1,1,0],[0,1,1]]
grid = [[2,1,1],[0,1,1],[1,0,1]]

console.log(orangesRotting(grid))