#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

typedef struct node
{
    char data[100];
    struct node *next;
} Node, *LinkList;

struct ListNode
{
    int val;
    struct ListNode *next;
};

void create(LinkList *p)
{
    int i = 0;
    char data[100];
    while (i < 4)
    {
        struct node *current = (struct node *)malloc(sizeof(struct node));
        current->next = NULL;
        scanf("%s", data);
        i++;
    }
}

struct ListNode *createListNode()
{

    struct ListNode *p;
    struct ListNode *prev;
    p = NULL;
    prev = p;
    int i = 0;
    while (i < 3)
    {
        struct ListNode *current = (struct ListNode *)malloc(sizeof(struct ListNode));
        current->next = NULL;
        scanf("%d", &current->val);
        if (p == NULL)
        {
            p = current;
        }
        else
        {
            prev->next = current;
        }
        prev = current;
        i++;
    }
    return p;
}

struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2)
{
    struct ListNode *result = NULL;
    struct ListNode *result1;
    struct ListNode *result2;
    struct ListNode *prev;
    result1 = list1;
    result2 = list2;
    prev = result;
    while (result1)
    {
        while (result2 && (result2->val < result1->val))
        {
            struct ListNode *currentNode = (struct ListNode *)malloc(sizeof(struct ListNode));
            currentNode->next = NULL;
            currentNode->val = result2->val;
            if (result == NULL)
            {
                result = currentNode;
            }
            else
            {
                prev->next = currentNode;
            }
            prev = currentNode;
            result2 = result2->next;
        }

        struct ListNode *currentNode = (struct ListNode *)malloc(sizeof(struct ListNode));
        currentNode->next = NULL;
        currentNode->val = result1->val;
        if (result == NULL)
        {
            result = currentNode;
        }
        else
        {
            prev->next = currentNode;
        }
        prev = currentNode;
        result1 = result1->next;
    }
    while (result2)
    {
        struct ListNode *currentNode = (struct ListNode *)malloc(sizeof(struct ListNode));
        currentNode->next = NULL;
        currentNode->val = result2->val;
        if (result == NULL)
        {
            result = currentNode;
        }
        else
        {
            prev->next = currentNode;
        }
        prev = currentNode;
        result2 = result2->next;
    }
    return result;
}

void printNode(struct ListNode *p)
{
    struct ListNode *node;
    node = p;
    while (node)
    {
        printf("%d ", node->val);
        node = node->next;
    }
}

int main()
{
    LinkList *list;
    struct ListNode *currentNode1;
    struct ListNode *currentNode2;
    currentNode1 = createListNode();
    currentNode2 = createListNode();
    struct ListNode *result;
    result = mergeTwoLists(currentNode1, currentNode2);
    // printNode(result);
}