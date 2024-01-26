#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TSIZE 45
typedef struct film
{
    char title[TSIZE];
    int rating;
};

typedef struct film Item;

typedef struct node
{
    Item item;
    struct node *next;
} Node, *List;

void initializeList(List *plist)
{
    *plist = NULL;
}

bool ListIsEmpty(const List *plist)
{
    if (*plist == NULL)
        return true;
    else
        return false;
}

bool ListIsFull(const List *plist)
{
    Node *pt;
    bool full;
    pt = (Node *)malloc(sizeof(Node));
    if (pt == NULL)
    {
        full = true;
    }
    else
        full = false;
    return full;
}

unsigned int ListItemCount(const List *plist)
{
    unsigned int count = 0;
    Node *pnode = *plist;
    while (pnode != NULL)
    {
        count++;
        pnode = pnode->next;
    }
    return count;
}

bool AddItem(Item item, List *plist)
{
    Node *pnew;
    Node *scan = *plist;
    pnew = (Node *)malloc(sizeof(Node));
    if (pnew == NULL)
    {
        return false;
    }
    pnew->item = item;
    if (scan == NULL)
    {
        *plist = pnew;
    }
    else
    {
        while (scan->next != NULL)
        {
            scan = scan->next;
        }
        scan->next = pnew;
    }
    return true;
}

void Traverse(const List *plist, void(*pfun)(Item item))
{
    Node *pnode = *plist;
    while (pnode != NULL)
    {
        pfun(pnode->item);
        pnode = pnode->next;
    }
}

void showmovies(Item item)
{
    printf("Movie name: %s Movie rating: %d\n", item.title, item.rating);
}

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
    List movies;
    Item temp;
    initializeList(&movies);
    if (ListIsFull(&movies))
    {
        printf("No memory available");
    }
    puts("Enter first movie title:");
    while (s_gets(temp.title, TSIZE) != NULL && temp.title[0] != '\0')
    {
        puts("Enter your rating <0-10>:");
        scanf("%d", &temp.rating);
        while (getchar() != '\n')
        {
            ;
        }
        if (AddItem(temp, &movies) == false)
        {
            printf("allcate error");
            break;
        }
        if (ListIsFull(&movies))
        {
            puts("List is full");
            break;
        }
        puts("Enter next movie title(empty line to stop):");
    }

    if (!ListIsEmpty(&movies)){
        Traverse(&movies, showmovies);
    }

    return 0;
}