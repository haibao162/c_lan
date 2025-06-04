给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。

//       1
//  2       5
// 3 4        6

//  1
//    2
//      3
//        4
//          5
//            6

// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]

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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
};