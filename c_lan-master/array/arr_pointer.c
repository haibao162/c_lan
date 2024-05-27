#include <stdio.h>



int main()
{
	int a[] = {1, 21, 33, 44, 55};
	int *p = a;
	printf("%d\n", *a);
	printf("%d\n", *(a + 1));
	printf("%d\n", a[1]);
	printf("%d\n", *p);
	printf("%d\n", *(p + 3));
	int b = 100;
	int *p1 = NULL;
	p1 = &b;
	printf("%d\n", *p1);
	int *p2 = &b;
	printf("*p2: %d\n", *p2);


	//  int *a1 = new int[100];
	//  a1[0] = 12;
	//  a1[1] = 1223;
	//  printf("%d", *(a1 + 1));

	return 0;
}
