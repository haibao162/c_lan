#include <stdio.h>
#include <string.h>

char* fun(){
    return "abc";
}
int main()
{
    char n[10];
    char ne[10] = "";
    // while(scanf("%s", n) != EOF) {
    //     printf("%s ", n);
    //     strcat(ne, n);
    // }
    scanf("%[^\n]", n); // 保证scanf遇到空格不会忽略掉空格后面内容
    printf("%s", n);
    putchar(ne);
    return 0;
}