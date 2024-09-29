/**
 * 二叉排序树
 */
class BSTNode {
    constructor(data) {
        this.key = data; // 索引，用于排序
        this.data = data;
        this.lchild = null;
        this.rchild = null;
    }
}
function insertBST(arr) {
    let tree = null;
    for (let i = 0; i < arr.length; i++) {
        let current = new BSTNode(arr[i]);
        // 根节点初始化
        if(tree == null) {
            tree = current;
        } else {
            // 递归插入节点
            insertNode(tree, arr[i]);
        }
    }
    return tree;

    // 复杂类型也一定要通过T.lchild = xxx的方式去赋值，T = T.lchild, T = xxx不起作用
    function insertNode(T, element) {
        if(!T) {
            return;
        } else {
            // element比节点数据小，尝试放在左子树
            if(T.data > element) {
                if(T.lchild) {
                 // 去跟左孩子比较
                 insertNode(T.lchild, element);
                } else {
                    // 左孩子为空，创建左孩子节点
                    T.lchild = new BSTNode(element);
                }
            } else if(T.data < element) {
                if(T.rchild) {
                 insertNode(T.rchild, element);
                } else {
                    T.rchild = new BSTNode(element);
                }
            } 
        }
    }
}
let list = [45,61,24,78,3,100,53,12,90,37];
const BSTree = insertBST(list); // 排序树
const result = []; // 中序遍历结果
function centerTravesal(root) {
    if(root) {
        centerTravesal(root.lchild);
        result.push(root.data);
        centerTravesal(root.rchild);
    }
}
centerTravesal(BSTree);
console.log(BSTree);
console.log(result);
