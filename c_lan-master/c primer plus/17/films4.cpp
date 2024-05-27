#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node
{
    int data;
    struct node *next;
} Node, *LinkList;

void initStar(LinkList *plist)
{
    (*plist)->data = 111;
    (*plist)->next = NULL;
}

void initByAddress(LinkList &L)
{
    L = (LinkList)malloc(sizeof(LinkList));
    L->data = 222;
    L->next = NULL;
}

void initByNode(LinkList *p)
{
    Node *p1; // 这里是p指向结构体指针的地址，*p就是指向结构体的地址
    p1 = *p;
    p1->data = 333;
    p1->next = NULL;
}

int main()
{
    LinkList node1, node2, node3;
    node1 = (struct node *)malloc(sizeof(struct node));
    initStar(&node1);
    printf("%d\n", node1->data);

    initByAddress(node2);
    printf("%d\n", node2->data);

    node3 = (struct node *)malloc(sizeof(struct node));
    initByNode(&node3);
    printf("%d\n", node3->data);

    Node nodes1;
    nodes1.data = 32;
    nodes1.next = NULL;
    Node *p1 = &nodes1;
    printf("%d\n", p1->data);

    return 0;
}