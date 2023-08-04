#include <stdio.h>
#include <time.h>
#include "rand0.h"

static unsigned long int next = 1;

unsigned int rand0(void)
{
    next = next * 1103515245 + 12345;
    
    return (unsigned int)(next / 65536) % 32768;
}

int ax = 100;

void srand1(unsigned int seed){
    next = ((unsigned int) time(0));
}