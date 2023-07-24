#include <stdio.h>

int main()
{
    int zippo[4][2] = {{2, 4}, {6, 8}, {1, 3}, {5, 7}};
    int (*pz)[2];// 内含两个指针元素的指针，每个元素都指向int的指针
    pz = zippo;
    printf("%d\n", *(pz[1] + 0)); // 6   *(zippo[1] + 0)
    printf("%d\n", *(pz[1] + 1)); // 8
    printf("%d\n", *(pz[2] + 1)); // 3
    printf("%d\n", *(pz[3] + 1)); // 7

    printf("%d\n", pz[1][2]); // 1

    for (int i =0; i < 4; i ++) {
        for(int j = 0; j < 2; j++) {
            printf("[i,j]:%d ", *(*(pz + i) + j));
        }
    }

}