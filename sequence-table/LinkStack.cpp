#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 链表栈头节点始终指向栈顶

#define MAXSIZE 100

typedef struct StackNode
{
    int data;
    struct StackNode *next;
} StackNode, *LinkStack;

void InitLinkStack(LinkStack *S)
{
    *S = NULL;
}

void Push(LinkStack *S, int data)
{
    struct StackNode *p = (struct StackNode *)malloc(sizeof(struct StackNode));
    p->data = data;
    printf("数据%d入栈\n", data);
    p->next = *S;
    *S = p;
}

int getTop(LinkStack *S)
{
    return (*S)->data;
}

void printStack(LinkStack *S)
{
    struct StackNode *p = *S;
    puts("---从栈顶开始输出内容---");
    while (p)
    {
        printf("%d\n", p->data);
        p = p->next;
    }
    delete p;
}

void Pop(LinkStack *S, int *popData)
{
    // struct LinkStack *p = *S;
    if(*S == NULL) {
        *popData = -1;
    } else {
        *popData = (*S)->data;
        *S = (*S)->next;
        puts("栈顶数据被删除");
    }
}

int main()
{
    LinkStack stack;
    InitLinkStack(&stack);
    Push(&stack, 11);
    Push(&stack, 12);
    Push(&stack, 13);
    int top = getTop(&stack);
    printf("栈顶元素:%d\n", top);
    printStack(&stack);

    int data = -1;
    Pop(&stack, &data);
    printf("删除的数据:%d\n", data);
    printStack(&stack);

    Push(&stack, 14);
    printStack(&stack);
    LinkStack stack1;
    InitLinkStack(&stack1);

    return 0;
}