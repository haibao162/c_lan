#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

// 中序线索二叉树
typedef struct BiThrNode
{
    char data;
    struct BiThrNode *lchild, *rchild;
    int Ltag; // 1:前驱 0:左节点
    int RTag; // 1:后驱 0:右节点
} BiThrNode, *BiThrTree;

BiThrTree pre = NULL; // 指向上一个访问的节点
//  C++ requires a type specifier for all declarations 代码片段没有写在函数中
// *pre = NULL;

// a+b*(c-d)
//     +             
//   a    *       
//       b   -
//         c   d

void printThread(BiThrTree &p)
{
    if (p)
    {
        printThread(p->lchild);
        printf("%c ", p->data);
        printThread(p->rchild);
    }
}

// 根据中序遍历和后续遍历生成二叉树
void rebuild(BiThrTree &tree, char* start, char* end, int centerLength) {
    // 子树的长度
    if (centerLength <= 0) {
        return;
    } else {
        BiThrTree current = (struct BiThrNode *)malloc(sizeof(struct BiThrNode));
        current->data = *(end + centerLength - 1);
        current->lchild = NULL;
        current->rchild = NULL;
        current->Ltag = 0;
        current->RTag = 0;
        tree = current;
        // end是中序遍历的数组，最后一个是子树的根节点
        int rootIndex = 0;
        while (rootIndex < centerLength && start[rootIndex] != *(end + centerLength - 1))
        {
            rootIndex++; // 找到根节点的位置
        }
        rebuild(tree->lchild, start, end, rootIndex);
        // printf("%c  %d  \n", *(start + rootIndex + 1),  centerLength - rootIndex - 1);
        rebuild(tree->rchild, start + rootIndex + 1, end + rootIndex, centerLength - rootIndex - 1);
    }
}

// 中序遍历进行中序线索化，没有左孩子
void InTheading(BiThrTree &p) {
    if(p) {
        InTheading(p->lchild);
        if(!p->lchild) {
            p->Ltag = 1;
            p->lchild = pre;
        } else {
            p->Ltag = 0; // 有左孩子为0，没有左孩子为1，指向前一个节点
        }
        if (!pre->rchild) {
            pre->RTag = 1;
            pre->rchild = p; // 没有右孩子，指向下一个节点
        } else {
            p->RTag = 0;
        }
        pre = p;
        InTheading(p->rchild);

    }
}

int main()
{
    BiThrTree p;
// +a##*b##-c##d##
    char center[] = "a+b*c-d"; // 中序遍历
    char right[] = "abcd-*+"; // 后续遍历
    rebuild(p, center, right, sizeof(right) / sizeof(right[0]) - 1);
    // printThread(p);
    InTheading(p);
    return 0;
}