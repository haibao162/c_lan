#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

#define MaxSize 100
#define ElemType int
#define Status int

typedef struct
{
    ElemType data[MaxSize];
    int *p;
    int length;
} SqlList;

// 初始化：顺序表长度为0，data数据全为0
Status initList(SqlList &L)
{
    memset(L.data, 0, sizeof(int) * MaxSize); // 初始化数据为0
    // malloc 函数返回的是void*, 如果L.data 是int * 类型，则可以(int *)malloc(400);
    // 通常malloc前必须要加(int *)、(char *)
    // L.data = new int[MaxSize]; 数组类型的时候不能用“=”赋值
    L.p = (int *)malloc(MaxSize * sizeof(int));
    L.length = 0;
    return 0;
}

// 创建长度为n个的数据
Status createList(SqlList &L, int n)
{
    if (n > MaxSize || n < 0)
    {
        return -1;
    }
    srand((unsigned long)time(NULL)); // 用来设置rand()产生随机数时的随机种子
    for (int i = 0; i < n; i++)
    {
        // scanf("%d", &L.data[i]);
        // L.data[i] = rand() % 10 + 1; // 随机1-100
        L.data[i] = i; // 随机1-100
        L.p[i] = rand() % 10 + 1; // 随机1-100
        L.length++;
    }
    return 0;
}

// 输出data
void printList(SqlList L)
{
    int arrLength = sizeof(L.data) / sizeof(int); // 获取数组长度
    for (int i = 0; i < L.length; i++)
    {
        printf("%d ", L.data[i]);
    }
}

// 输出 *p
void printPointer(SqlList L)
{
    for (int i = 0; i < L.length; i++)
    {
        printf("%d ", L.p[i]);
    }
}

// 查找是否包含值e
ElemType locateElem(SqlList L, ElemType e)
{
    int i = 0;
    while (i < L.length)
    {
        if (L.data[i] == e)
        {
            return i + 1;
        }
        i++;
    }
    return -1;
}

// 获取指定位置的值
ElemType getElem(SqlList L, int i, ElemType &p)
{
    if (i < 1 || i > L.length)
        return -1;
    p = L.data[i - 1]; // 存入变量里
    return 0;
}

// 插入,第i个数的后面
ElemType insertElem(SqlList *L, int i, ElemType e)
{

    if (i < 1 || i > L->length + 1) {
        return -1;
    }
    for (int j = L->length - 1; j > i - 1; j--)
    {
        L->data[j + 1] = L->data[j];
    }
    L->data[i] = e;
    L->length = L->length + 1;
    return 0;
}

// 删除
ElemType deleteElem(SqlList *L, int i)
{

    if (i < 1 || i > L->length + 1) {
        return -1;
    }
    for (int j = i; j < L->length - 1; j++)
    {
        L->data[j - 1] = L->data[j];
    }
    L->length = L->length - 1;
    return 0;
}

int main()
{
    SqlList L;
    initList(L);
    createList(L, 10);
    printf("查找元素的下标:%d\n", locateElem(L, 3)); // 是否包含3
    ElemType ele;
    getElem(L, 8, ele);
    printf("获取指定位置的值:%d\n", ele); // 获取data里第8个值
    insertElem(&L, 1, 110);
    printList(L); // 0 110 1 2 3 4 5 6 7 8 9 
    printf("\n");
    deleteElem(&L, 1);
    printList(L); // 110 110 1 2 3 4 5 6 7 8 

    printf("\n");
    return 0;
}
