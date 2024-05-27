#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

typedef struct BiTNode
{
    char data;
    struct BiTNode *lchild, *rchild;
} BiTNode, *BiTree;

void CreateBiTree(BiTree &T)
{
    char data;
    scanf("%c", &data);
    while (getchar() != '\n')
    {
        ;
    } // 清除scanf缓存区
    if (data != '#')
    {
        T = (struct BiTNode *)malloc(sizeof(struct BiTNode));
        T->lchild = NULL;
        T->rchild = NULL;
        T->data = data;
        CreateBiTree(T->lchild);
        CreateBiTree(T->rchild);
    }
    else
    {
        T = NULL; // 孩子节点为空
    }
}

void CenterInOrderTraverse(BiTree &T)
{
    if (T)
    {
        CenterInOrderTraverse(T->lchild);
        printf("节点字符%c\n", T->data);
        CenterInOrderTraverse(T->rchild);
    }
}

void FrontInOrderTraverse(BiTree &T)
{
    if (T)
    {
        printf("节点字符%c\n", T->data);
        FrontInOrderTraverse(T->lchild);
        FrontInOrderTraverse(T->rchild);
    }
}

void EndInOrderTraverse(BiTree &T)
{
    if (T)
    {
        EndInOrderTraverse(T->lchild);
        EndInOrderTraverse(T->rchild);
        printf("节点字符%c\n", T->data);
    }
}

void Copy(BiTree T, BiTree &NewT)
{
    if (T)
    {
        NewT = (struct BiTNode *)malloc(sizeof(struct BiTNode));
        NewT->data = T->data;
        Copy(T->lchild, NewT->lchild);
        Copy(T->rchild, NewT->rchild);
    }
    else
    {
        NewT = NULL;
    }
}
// 计算深度
int Depth(BiTree T)
{
    if (T)
    {
        int m = Depth(T->lchild);
        int n = Depth(T->rchild);
        if (m > n)
        {
            return m + 1;
        }
        else
            return n + 1;
    }
    else
        return 0;
}

int NodeCount(BiTree T)
{
    if (T)
    {
        return NodeCount(T->lchild) + NodeCount(T->rchild) + 1; 
    }
    else
        return 0;
}

int main()
{
    BiTree T;
    CreateBiTree(T);
    //        a
    //     b      d
    //    c #   e   f
    //   # #   # # # #
    //   输入abc###de##f##
    // CenterInOrderTraverse(T); // cbaedf
    // FrontInOrderTraverse(T); // abcdef
    // EndInOrderTraverse(T); // cbefda
    BiTree newT;
    Copy(T, newT);
    EndInOrderTraverse(newT); // cbefda
    int depth = Depth(newT);
    puts("---计算深度---");
    printf("%d\n", depth);
    puts("---统计节点个数---");
    int count = NodeCount(newT);
    printf("%d\n", count);
    return 0;
}