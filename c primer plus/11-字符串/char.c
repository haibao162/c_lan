#include <stdio.h>

char* fun(){
    return "abc";
}
int main()
{
    char s1[10] = "hello";
    printf("%s\n", s1);
    puts(s1); // 只显示字符串
    printf("%p  %c\n", "We", *"a");
    char *mesg = "dont";
    printf("%s %s\n", mesg, fun());
    char* p[2] = {
        "str1",
        "str2"
    };
    printf("%s:\n", *p);
}