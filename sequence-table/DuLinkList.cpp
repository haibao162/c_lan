#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 双向循环链表

typedef struct node
{
    int data;
    struct node *next;
    struct node *prior;
    int length;
} Node;

typedef Node *DuLinkList;

void initDuLinkList(DuLinkList *L)
{
    *L = (struct node *)malloc(sizeof(struct node));
    scanf("%d", &((*L)->data));
    while (getchar() != '\n')
    {
        ;
    }
    (*L)->length = 1; // 循环链表的长度
    (*L)->next = NULL;
    (*L)->prior = NULL;
    struct node *prev, *current;
    prev = *L;
    while (1)
    {
        current = (struct node *)malloc(sizeof(struct node));
        scanf("%d", &current->data);
        while (getchar() != '\n')
        {
            ;
        }
        current->next = NULL;
        if (current->data == 0)
        {
            break; // 输入0就跳出无限循环
        }
        current->prior = prev;
        prev->next = current; // (*L)->next = current; 下次循环是上次的current的next指向当前的current，即(*L)->next->next = current
        (*L)->length++;       // 长度+1
        prev = current;
    }
    // 跳出循环以后，prev指向了最后一个节点，让prev的next指向表头构成循环链表，表头的prior指向prev构成双向链表
    (*L)->prior = prev;
    prev->next = *L;
}

void print(DuLinkList *L)
{
    struct node *head;
    head = *L;
    int i = 1;
    while (head)
    {
        printf("双向链表的第%d个节点的数据是%d\n", i, head->data);
        head = head->next;
        i++;
        // 当节点的下一个节点指向头部时
        if (head == *L)
        {
            break;
        }
    }
}

int getLength(DuLinkList *L)
{
    return (*L)->length;
}

int getLengthByMap(DuLinkList *L)
{
    struct node *p = *L;
    int i = 0;
    while (p)
    {
        i++;
        p = p->next;
    }

    return i;
}

struct node *getElem(DuLinkList *L, int i)
{
    struct node *head = *L;
    int index = 1;
    while (head)
    {
        if (index == i)
        {
            return head;
        }
        index++;
        head = head->next;
    }
    return NULL;
}

// 第i个节点的前面插入数据
void insertElem(DuLinkList *L, int i, int data)
{
    struct node *insertNode, *current;
    current = (struct node *)malloc(sizeof(struct node));
    current->data = data;
    current->next =
        insertNode = getElem(L, i);
    if (insertNode)
    {
        printf("要插入的节点的数据是%d\n", insertNode->data);
        // 插入需要操作四个指针，current的next和prior，上一个节点的next指针，和当前节点的prior指针
        insertNode->prior->next = current;
        insertNode->prior = current;
        current->next = insertNode;
        current->prior = insertNode->prior;
        if (*L == insertNode)
        {
            *L = current; // 在第一个节点前插入当前新的节点，链表的表头要从新的节点开始
        }
        (*L)->length++;
        puts("插入成功");
    }
}

int main()
{
    DuLinkList list;
    initDuLinkList(&list);
    print(&list);
    int index = 3;
    struct node *node1;
    node1 = getElem(&list, index);
    if (node1)
    {
        printf("第%d个节点的数据值为:%d\n", index, node1->data);
        printf("第%d个节点的前一个节点数据值为:%d\n", index, node1->prior->data);
    }

    insertElem(&list, 1, 100); // 在第一个节点前面插入一个节点
    print(&list);
    return 0;
}