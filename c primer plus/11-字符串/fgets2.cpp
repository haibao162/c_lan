#include <stdio.h>

char *fun()
{
    return "abc";
}
int main()
{
    // scanf("%s", sc);// 只能获得单词
    // printf("%s\n", sc);
    char words[10];
    int i;
    while (fgets(words, 49, stdin) != NULL && words[0] != '\n')
    {
        fputs(words, stdout);
    }
    printf("%c:", *words);
    puts("Done");
}