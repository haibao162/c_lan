// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true

// 输入：p = [1,2], q = [1,null,2]
// 输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

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

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let res = true

    var dst = function (p, q) {
        if (p && q){
            if (p.val == q.val) {
                dst(p.left,q.left)
                dst(p.right,q.right)
            } else {
                res = false
                return
            }

        } else if(p || q) {
            res = false
        }
        return
    }
    dst(p, q)
    // console.log(res)
    return res
    
};

p = [1,2,3], q = [1,2,3]
p = [1,2], q = [1,null,2]
p = buildTree(p), q = buildTree(q)
isSameTree(p, q)