#include <stdio.h>

// char *fun()
// {
//     return "abc";
// }
int main()
{
    // char sc[100];
    // scanf("%s", sc);// 只能获得单词
    // printf("先使用scanf：%s\n", sc);
    // int temp = 0;
	// while ((temp = getchar()) != '\n')
	// {
	// 	;
	// }
    char words[10];
    fgets(words, 10, stdin); // 存储格式为abc\n\0，或者aaaaaaaaa\0
    fputs(words, stdout);
    printf("\n"); // 输出超过10个字符，剩下部分会保留在缓冲区，再次fgets不会触发输入，直接读取剩余部分
    fgets(words, 20, stdin);
    fputs(words, stdout);
    // while (fgets(words, 49, stdin) != NULL && words[0] != '\n')
    // {
    //     fputs(words, stdout);
    // }
    printf("%c:", words[0]);
    puts("Done"); // puts会在尾部加入换行符，而fputs不会
}