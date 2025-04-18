// 示例：

// 输入
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 输出
// [null, true, false, true, 2, true, false, 2]

// 解释
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
// randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
// randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。


var RandomizedSet = function() {
    this.arr = []
    this.indices = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // 包含了val，不在插入
    if (this.indices.has(val)) {
        return false
    }
    const length = this.arr.length
    this.indices.set(val, length)
    this.arr.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // 不包含val，返回false
    // console.log(val, this.indices, 'in')
    if (!this.indices.has(val)) {
        return false
    }
    let id = this.indices.get(val)
    // 将最后一个值放在要删除的id上，最后删除最后一个
    this.arr[id] = this.arr[this.arr.length - 1]
    this.arr.pop()
    this.indices.delete(val)
    this.indices.set(this.arr[id], id) // 更新map里的id
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function(val) {
    let id = Math.floor(Math.random() * this.arr.length)
    return this.arr[id]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)

var param_6 = obj.insert(2)
var param_7 = obj.getRandom()
// console.log(param_4, '第一个随机值')
// console.log(param_7, '第二个随机值')

// let a = new Map()
// let b = {}
// c = 2
// b[c] = 3
// a.set(c, 4)
// console.log(a)
// console.log(b)
let a = new Map([
    [1, 0],
    [2,'3'],
    [3, '4']
])
// a.delete(2)
// console.log(a)
// a = Math.floor(Math.random() * 100)
// console.log(a)
console.log(a.get(1), a.get(100)) // 0 undefined
console.log(a.has(1), a.has(100)) // true false


