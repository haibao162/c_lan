#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 单链表

// 按一整行输入字符串，换行符结束，并且删除换行符
char *s_gets(char *st, int n)
{
    char *ret_val;
    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        int i = 0;
        while (ret_val[i] != '\n' || ret_val[i] != '\0')
        {
            i++;
        }
        if (ret_val[i] == '\n')
        {
            ret_val[i] = '\0';
        }
        else
        {
            // 输入内容大于长度n，后面的多余字符从输入缓存区全部删除
            while (getchar() != '\n')
            {
                continue;
            }
        }
    }
    return ret_val;
}

typedef struct node
{
    int data;
    struct node *next;
} Node, *LinkList;
// typedef Node *LinkList;

void initLinkList(LinkList *L) {
    struct node *current = (struct node *)malloc(sizeof(struct node));
    (*L)->data = -1;
    (*L)->next = NULL;
}

void createLinkList(LinkList *L)
{
    struct node *current, *prev;
    prev = *L;
    while (1)
    {
        // 创建一个新的节点
        current = (struct node *)malloc(sizeof(struct node));
        scanf("%d", &current->data);
        current->next = NULL;
        if (current->data == 0)
        {
            break;
        }
        prev->next = current;
        prev = current;
    }
}

void print(LinkList *L)
{
    struct node *p = *L;
    int i = 1;
    while (p != NULL)
    {
        printf("第%d个节点data: %d\n", i, p->data);
        i++;
        p = p->next;
    }
}

// 链表按位置查找节点
struct node *getElem(LinkList L, int i)
{
    struct node *p;
    p = L;
    int j = 1;
    while (p)
    {
        if (j == i)
        {
            return p;
        }
        j++;
        p = p->next;
    }
    return NULL;
}

// 单链表按值查找节点
struct node *locateElem(LinkList L, int data)
{
    struct node *p;
    p = L;
    while (p)
    {
        if (p->data == data)
        {
            return p;
        }
        p = p->next;
    }
    return NULL;
}

int linkListLength(LinkList *L)
{
    int length = 0;
    struct node *p = *L;
    while (p != NULL)
    {
        length++;
        p = p->next;
    }
    return length;
}

// 在第i个位置后面插入节点，节点的值是data
void insertEle(LinkList *L, int i, int data)
{
    struct node *head = *L;
    int j = 1;
    while (head != NULL)
    {
        if (j == i)
        {
            // 插入操作
            struct node *item = (struct node *)malloc(sizeof(struct node));
            item->data = data;
            item->next = head->next;
            head->next = item;
            break;
        }
        j++;
        head = head->next;
    }
}

// 删除第i个位置的节点
void deleteEle(LinkList *L, int i)
{
    struct node *head = *L;
    int j = 1;
    if (i < 1)
    {
        puts("删除的位置不合法");
        return;
    }
    if (i == 1)
    {
        *L = (*L)->next; // 删除头结点，等价于链表从头结点的下一个加点开始
        return;
    }
    // 查找第i-1个位置的节点，如果节点不为空则j=i-1
    while (head != NULL && j < (i - 1))
    {
        j++;
        head = head->next;
    }
    // j=i-1时head也指向第i-1个节点(如果存在)
    if (j == (i - 1))
    {
        // 第i个节点不存在，则无法删除
        if (head->next == NULL)
        {
            return;
        }
        struct node *temp;
        temp = head->next; // 获取第i个及点
        if (temp->next) {
            head->next = temp->next; // 第i+1个节点存在，则第i-1个节点指向第i+1个节点
        } else {
            head->next = NULL; // 否则要删除的第i个节点就是最后一个节点，第i-1个节点指向NULL
        }
        printf("第%d个节点已删除\n", j + 1);
    }
    else
    {
        puts("删除的位置大于链表长度");
    }
}

int main()
{
    LinkList list;
    createLinkList(&list);
    print(&list);
    int index = 3;
    struct node *elem = getElem(list, index);
    if (elem != NULL)
    {
        printf("查询第%d个节点的data值:%d\n", index, elem->data);
    }
    int elemData = 10;
    struct node *locate = locateElem(list, elemData);
    if (locate != NULL && locate->next != NULL)
    {
        printf("查询data值为%d的节点的下一个节点的数据为:%d\n", elemData, locate->next->data);
    }
    int length = linkListLength(&list);
    int addData = 999;
    printf("在第%d个节点后面添加一个data值为%d的节点\n", length, addData);
    insertEle(&list, length, 999); // 在链表的最后加上一个节点，节点的data值是999
    print(&list);

    deleteEle(&list, 1);
    print(&list);
    // LinkList list2;
    // initLinkList(&list2);

    return 0;
}