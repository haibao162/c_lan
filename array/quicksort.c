#include <stdio.h>

void console(int *p)
{
	// 整数4个字节，字符2个字节
	int size = sizeof(*p); // 4:首元素字节, sizeof(p) // 8
	printf("sizeof(char *):%lu\n", sizeof(char *)); // 8
	printf("sizeof(int *):%ld\n", sizeof(int *)); // 8, 指针在32位(x86)平台下是4个字节，在64位(x64)平台下是8个字节。
	printf("sizeof(*p):%d\n", size);
	printf("p[4]:%d\n", p[4]);  // 通过指针访问
}

int main()
{
	int a[] = {1, 21, 33, 44, 55};
	
	return 0;
}
