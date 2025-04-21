// 给定两个整数数组 inorder 和 postorder，
// 其中 inorder 是二叉树的中序遍历，
// postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树
// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
//      3
//  9      20
//      15    7


// postorder最后一个元素是根节点, 然后找到inorder中根节点的位置,左边是左子树,右边是右子树
function buildTree(inorder, postorder) {
    let result = {
        val: null,
        left: null,
        right: null
    }
    // const inorder = [1,2,3,4], postorder = [2,1,4,3]
    function build(inorder, postorder, target) {
        if (!postorder.length) return null
        if (!inorder.length) return null

        let root = postorder.pop()
        const currentNode = target
        currentNode.val = root
        currentNode.left = null
        currentNode.right = null

        let rootIndex = inorder.indexOf(root)
        const leftInorder = inorder.slice(0, rootIndex) // 左子树的中序，空的话说明没有左子树
        const rightInorder = inorder.slice(rootIndex + 1) // 右子树的中序，空的话说明没有右子树
        let leftPostorder = [], rightPostorder = [];  // 左子树的后序,右子树的后序
        // console.log('rootIndex', leftInorder, rightInorder)
        if (leftInorder.length && rightInorder.length) {
            postorder.forEach((item, index) => {
                // 根据左子树的中序遍历，查询左子树在后序遍历中节点
                if (leftInorder.includes(item)) {
                    leftPostorder.push(item) // 左子树的后序
                }
                if (rightInorder.includes(item)) {
                    rightPostorder.push(item) // 右子树的后序
                }
            })
            currentNode.left = {}
            build(leftInorder, leftPostorder, currentNode.left)
            currentNode.right = {}
            build(rightInorder, rightPostorder, currentNode.right)
        } else if (leftInorder.length) {
            leftPostorder = postorder
            currentNode.left = {}
            build(leftInorder, leftPostorder, currentNode.left)
        } else if (rightInorder.length) {
            rightPostorder = postorder
            currentNode.right = {}
            build(rightInorder, rightPostorder, currentNode.right)
        } else {
            // console.log(inorder, postorder, 'inorder')
        }
    }
    build(inorder, postorder, result)
    // console.log(result)
    return result
}


const inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
//      3
//  9           20
//            15  7
// const inorder = [1,2], postorder = [2,1]
//  1
//    2
// const inorder = [2,3,1], postorder = [3,2,1]
//      1
//  2       3
// const inorder = [1,2,3,4], postorder = [2,1,4,3]
//      3
//  1       4
//    2

buildTree(inorder, postorder)