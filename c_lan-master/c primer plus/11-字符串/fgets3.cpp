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
    // 当第一个字符输入换行符时退出程序
    while (fgets(words, 10, stdin) != NULL && words[0] != '\n')
    {
        i = 0;
        while (words[i] != '\n' && words[i] != '\0')
            i++; // 匹配换行符\n或者空字符\0
        if (words[i] == '\n')
        words[i] = '\0'; // 换行符替换成空字符
        else while (getchar() != '\n') {
            continue; // 遇到空字符\0，这是因为输入的超过10个字符了但是还没换行，
            // 此时words中的最后一个字符赋值为空字符\0,前面9个是输入的合法内容，
            // 我们需要丢弃剩下的字符所以需要清空缓冲区剩余字段，否则下个输入函数不会另起一行输入而是从缓冲区直接取
        }
        puts(words);
    }
    puts("Done");
}