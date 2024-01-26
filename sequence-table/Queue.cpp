#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 循环队列，先进先出

#define MAXSIZE 5

typedef struct queue
{
    int *base;
    int front;
    int rear;
    //  rear = front队列为空， （rear+1）%MAXSIZE = front队列为满队(如果不留一个位置，当队列满时，rear = front)
} Queue;

void InitQueue(Queue *Q)
{
    Q->base = (int *)malloc(MAXSIZE * sizeof(int));
    Q->front = 0;
    Q->rear = 0;
}
// 入队: rear = rear + 1, 当rear指向最后一个位置时, rear = MAXSIZE - 1, rear+1后重新从0开始计数。
void EnQueue(Queue *Q, int data)
{
    if ((Q->rear + 1) % MAXSIZE == Q->front)
    {
        puts("队列已满");
    }
    else
    {
        Q->base[Q->rear] = data;
        printf("%d入队\n", data);
        Q->rear = (Q->rear + 1) % MAXSIZE;
    }
}

void DeQueue(Queue *Q, int *data)
{
    if (Q->front == Q->rear)
    {
        puts("队列为空");
    }
    else
    {
        *data = Q->base[Q->front];
        Q->front = (Q->front + 1) % MAXSIZE;
        printf("%d出队\n", *data);
    }
};

void printQueue(Queue *Q)
{
    if (Q->front == Q->rear)
    {
        puts("队列为空");
        return;
    }
    int start = Q->front;
    int end = Q->rear > Q->front ? Q->rear : (Q->rear + MAXSIZE);
    puts("---打印队列---");
    for (int k = start; k < end; k++)
    {
        int location = k % MAXSIZE;
        printf("地址为%d的数据为%d\n", location, Q->base[location]);
    }
}

void GetQueueHead(Queue *Q, int *data)
{
    *data = Q->base[Q->front];
}

int main()
{
    struct queue Q;
    InitQueue(&Q);
    EnQueue(&Q, 11);
    EnQueue(&Q, 12);
    EnQueue(&Q, 13);
    EnQueue(&Q, 14);
    printQueue(&Q);
    int data = -1;
    DeQueue(&Q, &data);
    DeQueue(&Q, &data);
    EnQueue(&Q, 15);
    EnQueue(&Q, 16);
    EnQueue(&Q, 17);
    printQueue(&Q);
    int head;
    GetQueueHead(&Q, &head);
    printf("循环队列的头指针的数据是:%d\n", head);
}
