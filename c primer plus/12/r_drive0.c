#include <stdio.h>
#include "rand0.h"

extern unsigned int rand0(void);
extern void srand1(unsigned int seed);
extern int ax;

int main(){
    int count = 0;
    srand1(0);
    while(count < 5) {
        printf("%d\n", rand0());
        count++;
    }
    printf("%d\n", ax);
    return 0;
}