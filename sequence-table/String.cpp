#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
// 串
// BF算法
// • S[i].ch和T[j].ch比较，若相等，则i和j分别指示串中下个位置， 继续比较后续字符；
// • 若不等，指针后退重新开始匹配， 从主串的下一个字符 (i=i-j+2) 起再重新和模式的
// 第一个字符 (j=1) 比较。

#define MAXLEN 15

typedef struct {
    char ch[MAXLEN + 1];
    int length;
} SString;

int main() {

}