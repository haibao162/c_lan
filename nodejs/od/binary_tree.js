//          1
//       2   3   4
//     5    6 7   8
//   9    10

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function createBinaryTree() {
    const root = new Node(1);
    const node1 = new Node(2);
    root.left = node1;
    const node2 = new Node(3);
    node1.left = node2;
    const node3 = new Node(4);
    node1.right = node3;
    return root;
}
console.log(createBinaryTree());