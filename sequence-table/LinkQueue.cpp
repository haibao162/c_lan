#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 链式队列
 
#define MAXSIZE 5
 
typedef struct QNode
{
    int data;
    struct QNode *next;
} QNode, *QueuePointer;
 
typedef struct {
    QueuePointer front; // 队头指针
    QueuePointer rear; // 队尾指针
} LinkQueue;
 
void InitQueue(LinkQueue *Q) {
    QueuePointer node = (struct QNode *)malloc(sizeof(struct QNode));
    node->data = 0;
    node->next = NULL;
    Q->front = node;
    Q->rear = node;
    // 空队列
}
 
// 入队
void EnQueue(LinkQueue *Q, int data) {
    struct QNode *node = (struct QNode *)malloc(sizeof(struct QNode));
    node->data = data;
    node->next = NULL;
    Q->rear->next = node; // 第一次设置rear，front的next指针也会指向新的节点
    Q->rear = node; // rear指向新的节点，在队尾
    // Q->front的next指向第一个有数据的节点。Q->front->data为空或者默认为0，不计入队列。
}
 
// 出队
void DeQueue(LinkQueue *Q, int *data) {
    LinkQueue *p;
    p = Q;
    struct QNode *temp;
    if (p->front == p->rear) {
        puts("队列为空");
        return;
    }
    if (p->front->next == p->rear) {
        *data = p->rear->data;
        p->rear = p->front; // 只有一个节点，删除后队尾指针指向队头指针
        temp = p->front->next;
        delete temp; // 释放删除节点的内存
    } else {
        *data = p->front->next->data;
        temp = p->front->next;
        p->front->next = temp->next; // 跨过要删除的节点，指向下下个节点
        delete temp;
    }
}
 
int GetQueueHead(LinkQueue *Q) {
    if (Q->front != Q->rear) {
        return Q->front->next->data;
    }
}
 
void PrintQueue(LinkQueue *Q) {
    LinkQueue *p;
    p = Q;
    struct QNode *head = p->front->next;
    if (p->front == p->rear) {
        puts("队列为空");
        return;
    }
    puts("---打印队列---");
    while(head) {
        printf("队列的数据为%d\n", head->data);
        head = head->next;
    }
}
 
int EmptyQueue(LinkQueue *Q) {
    if (Q->front == Q->rear) {
        return 1;
    } else return 0;
}
 
void conversion(LinkQueue *Q, int n) {
    InitQueue(Q);
    int number = n;
    while(number) {
        EnQueue(Q, number % 2);
        number = number / 2;
    }
    PrintQueue(Q);
    printf("---将10进制数据%d转化2进制---\n", n);
    while(!EmptyQueue(Q)) {
        int data;
        DeQueue(Q, &data);
        printf("%d", data);
    }
    printf("\n");
    puts("---end---");
}
 
int main()
{
    LinkQueue *linkQueue;
    linkQueue = (LinkQueue *)malloc(sizeof(LinkQueue));
    InitQueue(linkQueue);
    EnQueue(linkQueue, 101);
    EnQueue(linkQueue, 102);
    EnQueue(linkQueue, 103);
    EnQueue(linkQueue, 104);
    PrintQueue(linkQueue);
    int data = GetQueueHead(linkQueue);
    printf("队列头节点数据:%d\n", data);
    DeQueue(linkQueue, &data);
    DeQueue(linkQueue, &data);
    DeQueue(linkQueue, &data);
    PrintQueue(linkQueue);
    DeQueue(linkQueue, &data);
    PrintQueue(linkQueue);
 
    LinkQueue *queue;
    queue = (LinkQueue *)malloc(sizeof(LinkQueue));
    InitQueue(queue);
    // Segmentation fault: 11
    return 0;
}