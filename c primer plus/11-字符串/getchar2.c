#include <stdio.h>

int main()
{
    int temp1;
    temp1 = getchar();
    putchar(temp1);
    printf("%c", temp1);
    temp1 = getchar();
    putchar(temp1);
    while ((temp1 = getchar()) != '\n')
	{
		printf("字符");
        putchar(temp1);
	} 
    printf("\n");
    return 0;
}

