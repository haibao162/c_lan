#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

void Swap1(int &x, int &y)
{
    int temp = x;
    x = y;
    y = temp;
}
void get(int i, int &y)
{
    y = i;
}
int main()
{
    int a = 20, b = 30;
    Swap1(a, b);
    int x = -1;
    get(123, x);
    printf("%d\n", a);
    printf("%d\n", x);
    return 0;
}