#include <stdio.h>

typedef struct
{
	int num;
} Node;

typedef struct
{
	int *p;
} Sct;

void f1(Node *p)
{
	p->num = 4300;
};

void f2(Node &p)
{
	p.num = 200;
}
void f3(Node p)
{
	p.num = 300;
};

void print(Node *p)
{
	printf("%d\n", p->num);
}

void print(Node &p)
{
	printf("%d\n", p.num);
}

int main()
{
	Node n = {
		-1
	};
	print(&n);
	print(n);

	f1(&n);
	printf("%d\n", n.num);
	f2(n);
	printf("%d\n", n.num);
	f3(n);
	printf("%d\n", n.num);

	Node stu[3] = {
		{11},
		{111},
		{1111}};
	printf("%d\n", (stu + 2)->num);

	int x[2] = {1,2323};
	Sct m = {
		x
	};
	printf("%d\n", m.p[1]);

	return 0;
}
