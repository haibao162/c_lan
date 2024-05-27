#include <stdio.h>

void sort1(int arr[])
{
	arr[0] = 999;
}

char *sort2(int *arr)
{
	arr[0] = -3;
	*(arr + 1) = -111;
	return "";
}

int main()
{
	int a[] = {1, 21, 33, 44, 55};
	sort1(a);
	printf("sort1:%d\n", *a);
	sort2(a);
	int i = 0;
	while(i < 5) {
	printf("sort2:%d\n", *(a+i));
		i++;
	}
	return 0;
}
