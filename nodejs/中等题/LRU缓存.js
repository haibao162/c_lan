// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

function ListNode(key, value) {
    this.value = value
    this.key = key
    this.next = null
    this.prev = null
}

// map里存放key: ListNode的结构，ListNode使用一个双向链表存储，双向链表(链表无需循环)方便删除和添加，操作时是O(1)复杂度

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.head = new ListNode('head') // 头结点
    this.tail = new ListNode('tail') // 尾结点
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.map.get(key)
    if (!node) {
        return -1
    } else {
        const removeNode = this.removeNode(node)
        this.addToHead(removeNode)
        return node.value
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.map.get(key)
    if (node) {
        node.value = value
        const moveMode = this.removeNode(node)
        this.addToHead(moveMode)
    } else {
        const newNode = new ListNode(key, value)
        this.map.set(key, newNode)
        this.addToHead(newNode)
        this.size++
        if (this.size > this.capacity) {
            const removeNode = this.removeTail()
            // console.log(this.tail, this.map, 'this.tail.prev')
            this.map.delete(removeNode.key)
            this.size--
        }
    }
    
};

// 让head指向node，node指向head的next
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
};

LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    return node
    
};

LRUCache.prototype.removeTail = function() {
    const node = this.tail.prev
    this.removeNode(node)
    return node

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// var obj = new LRUCache(2)
// obj.put(1,1)
// obj.put(2,2)
// console.log(obj.get(1)) // 1
// obj.put(3,3)

// console.log(obj.get(2)) // -1
// obj.put(4,4)
// console.log(obj.get(1)) // -1
// console.log(obj.get(3)) //  3
// console.log(obj.get(4)) // 4

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

var obj = new LRUCache(2)
obj.put(1,0)
obj.put(2,2)
console.log(obj.get(1)) // 0
obj.put(3,3)

console.log(obj.get(2)) // -1
obj.put(4,4)

console.log(obj.get(1)) // -1
console.log(obj.get(3)) //  3
console.log(obj.get(4)) // 4