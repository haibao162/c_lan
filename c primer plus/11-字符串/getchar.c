#include <stdio.h>

char* fun(){
    return "abc";
}
int main()
{
    char* ch;
    // ch = getchar(); // 返回int，字符串则返回他的ascii码
    // putchar(ch);
    int temp = 0;
    	while ((temp = getchar()) != '\n')
	{
		printf("num");
        putchar(temp);
	}  // 此时清空了
    scanf("%s", ch);
    puts(ch);
    // if (getchar() == '\n') {
    //     printf("aa\n");
    // }
    return 0;
}

// 清理缓冲区
// int temp = 0;
// 	while ((temp = getchar()) != '\n')
// 	{
// 		;
// 	}