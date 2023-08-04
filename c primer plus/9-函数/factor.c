#include <stdio.h>
#include <string.h>

long fac(int n)
{
    long total;
    if (n > 0)
    {
        total = n + fac(n - 1);
    }
    else
        total = 0;
    return total;
}

// n % 2确定最后一位是0还是1， n / 2 % 2确定倒数第二位是0还是1
void to_binary(long n) {
    int r = n % 2;

    if (n >= 2) {
        to_binary(n / 2);
    }
    putchar(r == 0 ? '0' : '1');
}

int main()
{
    printf("%ld\n", fac(100));
    to_binary(64);
    printf("\n");
    return 0;
}