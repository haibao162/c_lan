class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

node = new Node(1)

// """
//     从层次遍历结果构建二叉树。
//     :param level_order: 层次遍历的列表
//     :return: 二叉树的根节点
//     """
function build_tree(level_order) {
    let root = new Node(level_order[0])
    queue = [root]
    i = 1
    // 每次循环获取队列的第一个节点当成父节点，i加两次，这是因为每次操作都是同时考虑左右孩子
    while(i < level_order.length) {
        current = queue.shift()
        // 左孩子
        if (level_order[i]) {
            current.left = new Node(level_order[i]) // 将左孩子加到父节点下面
            queue.push(current.left)
        }
        i += 1
        // 右孩子
        if (level_order[i]) {
            current.right = new Node(level_order[i]) // 将左孩子加到父节点下面
            queue.push(current.right)
        }
        i += 1
    }
    return root
}

root = [3,9,20,null,null,15,7]
//      3
//  9      20
// N  N   15 7

tree = build_tree(root)
console.log(tree)


function depth(root) {
    if(!root) {
        return 0;
    }
    left = depth(root.left) + 1
    right = depth(root.right) + 1
    return left > right ? left : right;
}

console.log(depth(tree))
