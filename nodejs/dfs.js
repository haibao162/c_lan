//          1
//       2   3   4
//     5    6 7   8
//   9    10
const tree = {
    data: 1,
    next: [{
        data: 2,
        next: [{
            data: 5,
            next: [{
                data: 9,
                next: null
            }]
        }]
    },
    {
        data: 3,
        next: [{
            data: 6,
            next: [{
                data: 10,
                next: null
            }],
        }, {
            data: 7,
            next: null
        }]
    },
    {
        data: 4,
        next: [null, {
            data: 8,
            next: null
        }]
    }
    ]
}
// 深度优先搜索，将节点放在一个栈里。因为是先一直往下找，所以同一层次的节点从右到左的入栈，然后栈顶出栈访问并压入它的子节点。
// 对于图而言，还需要构造一个visited数组，这样一个节点如果有多个父节点，只会访问一次。
function dfs(tree) {
    const stack = [];
    stack.push(tree); // 根节点入栈
    while(stack.length) {
        const currentNode = stack.pop(); // 提取数组最后一个
        console.log(currentNode.data);
        if (currentNode.next && currentNode.next.length) {
            let i = currentNode.next.length;
            // 倒序入栈，不要currentNode.next.reverse().forEach，这样会改变原有tree的结构。
            while(i) {
                currentNode.next[i-1] && stack.push(currentNode.next[i-1]);
                i--;
            }
        }
    }
}
console.log("---深度搜索---");
dfs(tree);
// 广度搜索，构造一个队列，将子节点按从左到右入队，然后出队访问
function bfs(tree) {
    const stack = [];
    stack.push(tree); // 根节点入栈
    while(stack.length) {
        const currentNode = stack.shift(); // 提取数组第一个
        console.log(currentNode.data);
        if (currentNode.next && currentNode.next.length) {
            currentNode.next.forEach(item => {
                if(item) { // 非空节点
                    stack.push(item);
                }
            });
        }
    }
}
console.log("---广度搜索---");
bfs(tree);