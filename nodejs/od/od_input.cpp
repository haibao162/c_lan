#include<stdio.h>
int main() {
    int a,b,t, sum = 0, p, c[100];
    // while (scanf("%d %d", &a, &b) != EOF)
    // {
    //     sum = a + b;
    //     printf("%d", sum);
    //     /* code */
    // }
    // while(scanf("%d", &a) != EOF) {
    //     sum = sum + a;
    //     printf("%d\n", sum);
    // }
    // scanf("%d",&t);
    // while(t--){
    //     scanf("%d%d", &a, &b);
    //     if (a==0) {
    //         break;
    //     }
    //     sum = a + b;
    //     printf("%d\n",sum);
    // }


    // while(scanf("%d",&t)!= EOF) {
    //     if(t == 0) break;
    //     sum = 0;
    //     while (t--)
    //     {
    //         scanf("%d", &a); // 一整行输入t个数，然后在换行，此时就能得到t个数相加结果
    //         sum += a;
    //     }
    //     printf("%d\n", sum);

    // }

    // 输入包含一个整数N在第一行,然后有N行测试用例，每一行都始于一个整数M,然后有M整数在同一个行。
// 每组输出整数之和且输出占一行,一行输入一行输出。
// 3
// 5 1 1 2 2 3
// 9
// 4 1 2 3 4
// 10
// 1 1
// 1
// scanf("%d", &p); 
// while(p--) {
//     scanf("%d", &t);
//     if(t == 0) {break;}
//     sum = 0;
//     while(t--){
//         scanf("%d", &a);
//         sum += a;
//     }
//     printf("%d\n", sum);
// }
// 3 1 2 3
// 6
// 5 1 2 3 4 5
// 15
// 按照行输入，第一个表示个数M，后面输入M个数字，然后换行
// while (scanf("%d", &t)!= EOF) {
//     sum = 0;
//     if(t == 0) {break;}
//     while(t--) {
//         scanf("%d", &a);
//         sum += a;
//     }
//     printf("%d\n\n", sum); // 结果之间多一个空行
// }

// 2
// 3 11 22 33
// 66

// 5 1 2 3 4 5
// 15

scanf("%d", &p);
while(p--){
    scanf("%d", &t); // 表示随后每行要输入t个数字
    sum = 0;
    while (t--)
    {
        scanf("%d", &a);
        sum += a;
    }
    printf("%d\n\n", sum);
}


}