#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

typedef struct LNode
{
    /* data */
    int data;
    struct LNode *p;
} LNode, *LinkList;

void testLNode(LinkList *L) {
    L = (LinkList*)new LNode;
    L.p = NULL;
}

int main()
{
    LinkList *node;
    testLNode(node);
    printf("%d", node.data);
    return 0;
}