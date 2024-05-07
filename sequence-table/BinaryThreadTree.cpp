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

BiThrTree prev = NULL;
//  C++ requires a type specifier for all declarations 代码片段没有写在函数中
// *prev = NULL;

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

int main()
{
    BiThrTree p;
// +a##*b##-c##d##
    char center[] = "a+b*c-d"; // 中序遍历
    char right[] = "abcd-*+"; // 后续遍历
    rebuild(p, center, right, sizeof(right) / sizeof(right[0]) - 1);
    printThread(p);
    return 0;
}