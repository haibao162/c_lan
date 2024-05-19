#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int *p;
    p = (int *)malloc(10 * sizeof(int));
    printf("%p", p);
    free(p);

    return 0;
}