function priorQueue(arr = []) {
    this.queue = []
}

//    3
//  4   5
// 6 1
priorQueue.prototype.queuepush = function (value) {
    console.log(this.queue)
    this.queue.push(value)
    let i = this.queue.length // 获取最后一个元素
    // 序号为2的子节点是4和5，
    let parent = Math.ceil((i - 1) / 2) // 得到父元素
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
priorQueue.prototype.queueppop = function (value) {
    console.log(this.queue)
}


queue = new priorQueue()
queue.queuepush()
