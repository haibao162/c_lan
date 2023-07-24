#include <stdio.h>

struct Student
{
    char name[100];
} student;

typedef struct Apple
{
    char name[100];
} Apple;

typedef struct Error
{
    char name[100];
} Error;

int main()
{
    struct Student stu1 = {
        "stu1"};
    struct Apple apple1 = {
        "apple1"};
    Apple apple2 = {"apple2"};

    struct Error error = {"error"};

    // student = { "stu2" };

    printf("%s\n", stu1.name);
    printf("(&stu1)->name: %s\n", (&stu1)->name);

    printf("%s\n", apple1.name);
    printf("%s\n", apple2.name);
    printf("student name:%s\n", student.name);
    printf("Error:%s\n", error.name);

    Apple *ap2 = &apple2;
    printf("*ap2:%s\n", ap2->name);
}