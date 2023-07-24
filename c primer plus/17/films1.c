#include <stdio.h>
#include <string.h>

#define TSIZE 45 // 存储片名的数组大小
#define FMAX 1   // 影片最大数量

struct film
{
    char title[TSIZE];
    int rating;
};

char *s_gets(char *st, int n)
{
    char *ret_val;
    char *find;
    ret_val = fgets(st, n, stdin);
    printf("%s\n", ret_val);
    if (ret_val)
    {
        find = strchr(st, '\n');
        printf("find:%s\n", find);
        if (find)
        {
            *find = "\0";
        }
        else
        {
            char c;
            while (getchar() != '\n')
            {
                // printf("getchar:%s", c);
                continue;
            }
        }
    }
    return ret_val;
}
int main()
{
    struct film movies[FMAX];
    int i = 0;
    int j;
    puts("Enter first movie title:");
    while (i < FMAX && s_gets(movies[i].title, TSIZE) != NULL && movies[i].title[0] != "\0")
    {
        puts("Enter your rating <0-10>:");
        scanf("%d", &movies[i++].rating);
            char c;
        while (getchar() != '\n')
        {
            continue;
        }
        puts("Enter next movie title(empty line to stop):");
    }
    printf("%s", movies[1].title);
    for (j = 0; j < i; j++)
        {
            printf('Movie: %sRating: %d\n', movies[j].title, movies[j].rating);
        }
        return 0;
}