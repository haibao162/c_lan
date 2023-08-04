#include <stdio.h>

char* fun(){
    return "abc";
}
int main()
{
    int ch = 0;
    while((ch = getchar()) != EOF) {
        putchar(ch);
        printf(" ");
    }
    return 0;
    // 当程序调用 getchar 时，程序就等着用户按键。
    // 用户输入的字符被存放在键盘缓冲区中，直到用户按回车为止（回车字符 \n 也放在缓冲区中），
    // 当用户键入回车之后，getchar() 函数才开始从输入缓冲区中每次读取一个字符，
    // getchar 函数的返回值是用户输入的字符的 ASCII 码，若遇到文件结尾 (End-Of-File) 则返回 -1 (EOF)，
    // 并将用户输入的字符回显到屏幕，如果用户在按回车之前输入了不止一个字符，其他字符会保留在键盘缓存区中，
    // 等待后续 getchar 调用读取。也就是说，后续的 getchar 调用不会等待用户按键，
    // 而直接读取缓冲区中的字符，直到缓冲区中的字符读完后，才等待用户按键。
}