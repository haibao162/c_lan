#include <stdio.h>

int main()
{
    char* temp1;
    printf("学号：");
    scanf("%s", temp1);
    int temp = 0;
	while ((temp = getchar()) != '\n')
	{
		;
	}
    int temp2 = 0;
    printf("姓名：");
    temp2 = getchar();
    printf("您的学号：%s\n", temp1);
    printf("您的姓名：%c\n", temp2);

    
    return 0;
}

