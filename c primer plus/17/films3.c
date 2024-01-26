#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct film {
    int data;
    struct film *next;
} film;

// void *s_gets(char *st, int n) {
//     char *val = fgets(st, n, stdin);
//     if (val) {
//         int i = 0;
//         while (st[i] != '\0' || st[i] != '\n')
//         {
//             i++;
//         }
//         if (st[i] == '\n') {
//             st[i] = '\0';
//         } else {
//             while (getchar() != '\n') {
//                 ;
//             }
//         }
//     }
// }

int main()
{
    struct film *head;
    head = NULL;
    struct film *prev, *current;
    int len = 3;
    while(len > 0) {
        current = (struct film *)malloc(sizeof(struct film));
        current->next = NULL;
        scanf("%d", &current->data);
        while (getchar() != '\n')
        {
        }
        if (head == NULL) {
            head = current;
        } else {
            prev->next = current;
        }
        prev = current;
        len--;
    }
    current = head;
    while (current != NULL)
    {
        printf("cru:%d ", current->data);
        current = current->next;
    }
    return 0;

}