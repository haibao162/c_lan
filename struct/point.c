#include <stdio.h>

int max(int x, int y)
{
    return x > y ? x : y;
}

void swap(int x, int y)
{
}

int main(void)
{
    int a, b;
    printf("%p\n", &a);
    int (*p)(int, int) = max;
    b = p(10,20);
    printf("%d\n", b);
}