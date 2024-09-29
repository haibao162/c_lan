/**
 * 哈夫曼树
 */
class Fn { }
class Node extends Fn {
    constructor(data) {
        super();
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

let arr = [12, 9, 13, 6, 3];
arr = arr.map(a => new Node(a));
let prev = {};
while(arr.length > 1) {
    arr.sort((x,y) => y.data - x.data);
    let min1 = arr.pop();
    let min2 = arr.pop();
    let nodes = new Node(min1.data + min2.data);
    nodes.left = min1;
    nodes.right = min2;
    arr.push(nodes);
}
console.log(arr);

