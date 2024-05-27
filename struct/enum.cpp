#include <stdio.h>

// ATOM==O: 原子； LIST==l: 子表
typedef enum ElemTag
{
	ATOM,
	LIST,
} ElemTag;
// 头尾链表存储广义表
typedef struct Node
{
	ElemTag tag;
	union
	{
		int atom;
		struct
		{
			struct Node *head;
			struct Node *tail;
		} Link;
	};
} Node, GNode;

// 从第一个结点开始，link指向兄弟节点，如果无兄弟指向null
typedef struct Link {
	ElemTag tag;
	union {
		int atom; // 当前为原子结点
		struct Link *sublist; // 当前结点时子广义表
	}
	struct Link *link; // 指向孩子的下一个兄弟
} Link, GLink

int
main()
{
	ElemTag tag;
	tag = ATOM;
	printf("%d\n", tag);
	return 0;
}
