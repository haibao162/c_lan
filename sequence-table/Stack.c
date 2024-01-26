#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 顺序栈

#define MAXSIZE 100

typedef struct stack
{
    int *base;     // 栈底指针
    int *top;      // 栈顶指针
    int index;     // 用int值记录栈顶位置
    int stacksize; // 容量
} SqStack;

void InitStack(SqStack *S)
{
    S->base = (int *)malloc(MAXSIZE * sizeof(int));
    // S->top = (int *)malloc(MAXSIZE * sizeof(int));
    S->top = S->base; // 栈顶指向base栈底，表示栈为空
    S->index = 0;     // 也可用一个int数值判断栈是否为空，0为空
    S->stacksize = MAXSIZE;
}

void Push(struct stack *S, int data)
{
    if (S->top - S->base == S->stacksize)
    {
        puts("顺序栈已满");
        return;
    }
    S->top++;         // 栈顶指针首地址指向当前地址的下一个地址
    *(S->top) = data; // 第一次执行时，访问s.top等价于s.base + 1
}

void Pop(struct stack *S, int *data)
{
    if (S->base == S->top)
    {
        // 栈顶指向栈底
        *data = -1;
    }
    *data = *(S->top);
    S->top--; // 栈顶指向上一个地址
}

int getTop(struct stack *S)
{
    return *(S->top);
}

void clearStack(struct stack *S)
{
    S->base = NULL;
    S->top = NULL;
    S->index = 0;
    S->stacksize = MAXSIZE;
}

char *StackEmpty(struct stack *S)
{
    if (S->base == S->top)
    {
        return "yes"; // 是空栈
    }
    else
        return "no";
}

int StackLength(struct stack *S)
{
    return S->top - S->base;
}

void printStack(struct stack *S)
{
    int length = StackLength(S);
    int i = 1;
    while (i <= length)
    {
        printf("顺序栈的第%d个元素:%d\n", i, *(S->base + i));
        i++;
    }
}

int main()
{
    SqStack node;
    InitStack(&node);
    Push(&node, 11);
    Push(&node, 12);
    Push(&node, 13);
    Push(&node, 14);
    puts("---打印添加后的顺序栈里的元素---");
    printStack(&node);
    printf("顺序栈的长度:%d\n", StackLength(&node));
    puts("---删除顺序栈里的元素---");
    int removeData = -1;
    Pop(&node, &removeData);
    printf("第一次删除的数据:%d\n", removeData);
    Pop(&node, &removeData);
    printf("第二次删除的数据:%d\n", removeData);
    puts("---打印删除后的顺序栈里的元素---");
    printStack(&node);
    clearStack(&node);
    printf("顺序栈是否为空:%s\n", StackEmpty(&node));
    return 0;
}