#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 中序遍历的非递归算法

// 二叉树
typedef struct BiTreeNode
{
    char data;
    struct BiTreeNode *lchild, *rchild;
} BiTreeNode, *BiTree;

// 链表栈
typedef struct StackNode {
    struct BiTreeNode *tree;
    struct StackNode *next;
} StackNode, *LinkStack;

int isEmptyStack(LinkStack &S) {
    if (S == NULL) {
        return 1; // 空栈
    } else {
        return 0;
    }
}

void InitBiTree(BiTree &T)
{
    char ch;
    scanf("%c", &ch);
    while (getchar() != '\n')
    {
        ;
    }
    if (ch != '#')
    {
        T = (BiTreeNode *)malloc(sizeof(struct BiTreeNode));
        T->data = ch;
        T->lchild = NULL;
        T->rchild = NULL;
        InitBiTree(T->lchild);
        InitBiTree(T->rchild);
    }
}

// 不需要初始化空节点，直接为空
void InitStack(LinkStack &S) {
    S = NULL;
}

void PushStack(LinkStack &S, BiTree &T) {
    struct StackNode *p = (struct StackNode *)malloc(sizeof(struct StackNode));
    p->tree = T;
    p->next = S; // S代表地址;
    S = p; // p也是地址
}

void PopStack(LinkStack &S, BiTree &T) {
    if (S) {
        T = S->tree;
        S = S->next;
    }
}

// 中序遍历的非递归算法
void CenterTraverseByStack(LinkStack &S, BiTree T) {
    BiTree p = T; // 不要直接操作p里的值，参数一般为BiTree T而不是BiTree &T。
    while (p || !isEmptyStack(S)) { // p不存在，弹出栈顶元素访问，下次循环栈顶的右孩子
        if(p) {
            PushStack(S, p); // 将数据入栈，指针p指向
            p = p->lchild;
        } else {
            BiTree q;
            PopStack(S, q);
            printf("%c ", q->data);
            p = q->rchild;
        }
    }
}

void CenterTraverse(BiTree &T)
{
    if (T)
    {
        CenterTraverse(T->lchild);
        printf("%c ", T->data);
        CenterTraverse(T->rchild);
    }
}

int main()
{
    BiTree T;
    //        a
    //     b      d
    //    c #   e   f
    //   # #   # # # #
    //   输入abc###de##f##
    puts("---输入abc###de##f##创建二叉树---");
    InitBiTree(T);
    puts("---中序遍历---");
    CenterTraverse(T); // c b a e d f 
    LinkStack S;
    InitStack(S);
    puts("---使用栈遍历树---");
    CenterTraverseByStack(S, T);
    puts("---end---");

    return 0;
}