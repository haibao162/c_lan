// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 输入：root = [2,1,3]
// 输出：true

// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const centerBST = []
    var dst = function (head) {
        if (!head) {
            return
        } else {
            if (head.left) {
                dst(head.left)
            }
            centerBST.push(head.val)
            if (head.right) {
                dst(head.right)
            }
        }
    }
    dst(root)
    // console.log(centerBST)
    for (let i = 0;i < centerBST.length - 1;i++) {
        if (centerBST[i+1] <= centerBST[i]) {
            return false
        }
    }
    return true
    
};


function TreeNode(val, left, right) {
    this.val = val ||  0 
    this.left = left || null
    this.right = right || null
}

function buildTree(arr) {
    let length = arr.length
    const head = new TreeNode(arr[0])
    const queue = [head]
    let i = 1
    while(i < length) {
        const currentNode = queue.shift()
        if(arr[i]) {
            const left = new TreeNode(arr[i])
            currentNode.left = left
            queue.push(left)
        }
        i++
        if (arr[i]) {
            const right = new TreeNode(arr[i])
            currentNode.right = right
            queue.push(right)

        }
        i++
    }
    return head
}

root = [4,1,4,null,null,3,6]
root = [2,2,2]


root = buildTree(root)
console.log(isValidBST(root))
