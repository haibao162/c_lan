#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TSIZE 45 // 存储片名的数组大小
#define FMAX 2   // 影片最大数量

struct film
{
    char title[TSIZE];
    int rating;
    struct film *next;
};

char *s_gets(char *st, int n)
{
    char *ret_val;
    char *find;
    ret_val = fgets(st, n, stdin);
    // printf("%s\n", ret_val);
    if (ret_val)
    {
        find = strchr(st, '\n');
        if (find)
        {
            *find = '\0';
        }
        else
        {
            while (getchar() != '\n')
            {
                continue;
            }
        }
    }
    return ret_val;
}
int main()
{
    struct film *head = NULL;
    struct film *prev, *current; // 这里的赋值都是地址传递，也就是深复制。修改原始数据的next，等号赋值的next也会同步修改
    char input[TSIZE];
    puts("Enter first movie title:");
    while (s_gets(input, TSIZE) != NULL && input[0] != '\0')
    {
        current = (struct film *)malloc(sizeof(struct film));
        if (head == NULL) {
            head = current;
        } else {
            prev->next = current; 
            // 当head不为NULL时，第二次设置prev->next的值，head->next也会指向current。
            // 第三次设置时，prev保留了第二次的current，而head->next此时指向上一次设置的current，执行prev->next=current，相当于head->next->next=current
        }
        current->next = NULL;
        strcpy(current->title, input);
        puts("Enter your rating <0-10>:");
        scanf("%d", &current->rating);
        while (getchar() != '\n')
        {
            continue;
        }
        puts("Enter next movie title(empty line to stop):");
        prev = current; // 保留上一个节点（也是head最后一个节点）,第一次执行时，head和prev都会指向current
    }
    current = head;
    while (current != NULL)
    {
        printf("Movie title: %s rating: %d\n", current->title, current->rating);
        current = current->next;
    }
    // current = head;
    // while (current != NULL)
    // {
    //     current = head;
    //     head = current->next;
    //     free(current);
    // }
    puts("end");
    return 0;
}