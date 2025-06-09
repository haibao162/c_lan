function priorQueue(arr = []) {
    this.queue = []
    // for (let i = 0; i < arr.length; i++) {
    //     this.queuepush(arr[i])
    // }
    this.queue.push(...arr)
    for (let i =  Math.ceil((this.queue.length - 1) / 2);i--;i > 0) {
        this.siftDown(i, this.queue.length)
    }
}

//    3
//  4   5
// 6 1

//     1
//  3      5
// 6 4   2

priorQueue.prototype.queuepush = function (value) {
    // console.log(this.queue)
    this.queue.push(value)
    let i = this.queue.length // 获取最后一个元素
    // 序号为2的子节点是4和5，
    let parent = Math.ceil((i - 1) / 2) // 得到父元素
    // console.log(parent, this.queue[parent - 1],'parent')
    while (parent > 0) {
        if (this.queue[parent - 1] > this.queue[i - 1]) {
            const temp = this.queue[i - 1]
            this.queue[i - 1] = this.queue[parent - 1]
            this.queue[parent - 1] = temp
            i = parent
            parent = Math.ceil((parent - 1) / 2)
        } else {
            break
        }
    }
}

// 推出根节点
priorQueue.prototype.queuepop = function (value) {
    // console.log(this.queue)
    if (this.queue.length === 0) return
    let last = this.queue.pop()
    this.queue[0] = last
    this.siftDown(1, this.queue.length) // 根节点向下调整
}

// 向下调整
//    1
//  3   5
// 6 4
// 删除4：
//    4
//  3   5
// 6 
// 比较左孩子和右孩子大小，对于小根堆而言，取较小者和父节点比较，如果父节点最小，则无需调整
priorQueue.prototype.siftDown = function (parent, end) {
    let child = parent * 2 // 2i 和2i + 1
    while (child < end) {
        if (child < end && this.queue[child - 1] > this.queue[child]) {
            child++ // 小根堆中，右孩子更小选择右孩子
        }
        // 父节点大于子节点，需要交换
        if (this.queue[parent - 1] > this.queue[child - 1]) {
            const temp = this.queue[child - 1]
            this.queue[child - 1] = this.queue[parent - 1]
            this.queue[parent - 1] = temp
            parent = child
            child = parent * 2
        } else {
            break // 无需向下调整
        }
    }


}


queue = new priorQueue([4,3,5,6])
console.log(queue.queue) // [ 3, 4, 5, 6 ]

//    3
//  4   5
// 6 1
queue.queuepush(1)
console.log(queue.queue) // [ 1, 3, 5, 6, 4 ]
//    1
//  3   5
// 6 4

queue.queuepush(2)
console.log(queue.queue) // [ 1, 3, 2, 6, 4, 5 ]
//    1
//  3   2
// 6 4 5


//        3
//     4      5
//   6   7  8   9
// 10 11
// 删除根节点：将最后一个节点放入根节点，然后从根节点开始向下调整，从跟节点到最后一个非叶子节点
//         11
//     4      5
//   6   7  8    9
// 10


