
// 示例 1：
//        3
//     1     4
//   3     1   5

// 输入：root = [3,1,4,3,null,1,5]

// 输入：root = [3,3,null,4,2]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function BuildTree(arr) {
    const root = new TreeNode(arr[0])
    let queue = [root]
    let i = 1
    while(i < arr.length) {
        let current = queue.shift()
        if (arr[i]) {
            current.left = new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++
        if (arr[i]) {
            current.right = new TreeNode(arr[i])
            queue.push(current.right)
        }
        i++
    }
    // console.log(root)
    return root
}

var BFS = function (root) {
    console.log(root)
    let queue = [root]
    while (queue.length) {
        let currentNode = queue.shift()
        console.log(currentNode.val)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)

        }
    }

}

// 示例 2：
//         3
//      1     4
//   3      1   5
//    1        10 11


root = [3,1,4,3,null,1,5]
// root = [3,3,null,4,2]
root = [3,1,4,3,null,1,5,null, 1,null,null,null,null,10,11]

root = BuildTree(root)
BFS(root)