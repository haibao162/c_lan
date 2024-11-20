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

function initBST(arr) {
    let tree = null;
    for (let i = 0; i < arr.length; i++) {
        let current = new BSTNode(arr[i]);
        // 根节点初始化
        if (tree == null) {
            tree = current;
        } else {
            // 递归插入节点
            insertNode(tree, arr[i]);
        }
    }
    return tree;
    /**
     * 二叉排序树插入
     * js中复杂类型也一定要通过T.lchild = xxx的方式去赋值，T = T.lchild, T = xxx不起作用
     */
    function insertNode(T, element) {
        if (!T) {
            return;
        } else {
            // element比节点数据小，尝试放在左子树
            if (T.data > element) {
                if (T.lchild) {
                    // 去跟左孩子比较
                    insertNode(T.lchild, element);
                } else {
                    // 左孩子为空，创建左孩子节点
                    T.lchild = new BSTNode(element);
                }
            } else if (T.data < element) {
                if (T.rchild) {
                    insertNode(T.rchild, element);
                } else {
                    T.rchild = new BSTNode(element);
                }
            }
        }
    }
}
// 复制一棵树
function copy(origin, target) {
    if (origin) {
        target.data = origin.data;
        target.lchild = {};
        target.rchild = {};
        copy(origin.lchild, target.lchild);
        copy(origin.rchild, target.rchild);
    }
}
// 删除一个节点，分三种情况
function deleteBST(T, element) {
    let p = T; // 要删除的节点
    let parent = null; // p节点的父节点
    while (p) {
        // 找到节点p就跳出循环，此时p为要删除的节点
        if (p.data == element) {
            break;
        }
        parent = p; // 记录要删除的节点的父节点
        // 比要找的数据大，从左子树开始找
        if (p.data > element) {
            p = p.lchild;
        } else {
            p = p.rchild;
        }
    }
    if (!p) {
        return; // 没有找到要删除的节点
    }
    if (p.lchild && p.rchild) {
        let q = p;
        s = p.lchild;
        // 非空对象
        while (s.rchild && Object.keys(s.rchild).length) {
            q = s; // 前驱节点的父节点
            s = s.rchild; // 找到前驱节点
        }
        p.data = s.data; // 将前驱节点放在要删除的节点
        if (p != q) {
            //          p
            //     x1
            //   x2    s
            //       x3
            if (s.lchild) {
                q.rchild = s.lchild; // x1的右孩子指向x3
            } else {
                //          p
                //     x1
                //   x2    s
                //       x3 x4
                // 以上的结构，代码里的s指向x4，只需要删除x4
                q.rchild = null; // 删除x4
            }
        } else {
            //        p
            //    x1
            //  x2
            q.lchild = s.lchild; // 此时s是x1，p的左孩子指向x2
        }
        delete s;
        return;
    } else {
        let s = {};  // 如果p是叶子节点，父节点的孩子为{}，表示直接删除
        if (p.lchild) {
            s = p.lchild;
        }
        if (p.rchild) {
            s = p.rchild;
        }
        if(!parent) {
            // 执行T=s
            for(let o in s) {
                T[o] = s[o];
            }
            return;
        }
        if (p == parent.lchild) {
            parent.lchild = s;
        } else {
            parent.rchild = s;
        }
    }
}

let list = [45, 61, 24, 78, 3, 100, 53, 12, 90, 37];
//        45
//    24       61
// 3    37   53  78
//  12              100
//                90
const BSTree = initBST(list); // 排序树
const result = []; // 中序遍历结果
function centerTravesal(root) {
    if (root) {
        centerTravesal(root.lchild);
        result.push(root.data);
        centerTravesal(root.rchild);
    }
}
centerTravesal(BSTree);
console.log('BSTree:', BSTree);
console.log('BSTree sort:', result);
const copyTree1 = {};
const copyTree2 = {};
copy(BSTree, copyTree1);
copy(BSTree, copyTree2);
deleteBST(copyTree2, 24);
console.log('copyTree2  删除24:', copyTree2);
