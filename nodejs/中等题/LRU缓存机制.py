class DLinkedNode:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.cache = dict()
        self.head = DLinkedNode()
        self.tail = DLinkedNode()
        self.head.next = self.tail
        self.tail.prev = self.head
        self.capacity = capacity
        self.size = 0

    def get(self, key):
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self.moveToHead(node)
        return node.value
    
    def put(self, key, value):
        if key not in self.cache:
            node = DLinkedNode(key, value)
            # 添加进hash表
            self.cache[key] = node
            # 添加到双向链表的头部
            self.addToHead(node)
            self.size += 1
            if self.size > self.capacity:
                # 删除尾部
                removed = self.removeTail()
                self.cache.pop(removed.key)
                self.size -= 1
        else:
            node = self.cache[key]
            node.value = value
            self.moveToHead(node)
        

    
    def addToHead(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
    
    def moveToHead(self, node):
        self.removeNode(node)
        self.addToHead(node)

    def removeNode(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
    
    def removeTail(self):
        node = self.tail.prev
        self.removeNode(node)
        return node
    
obj = LRUCache(2)
obj.put(1,1)
obj.put(2,2)
print(obj.get(1)) # 1
obj.put(3,3)
print(obj.get(2)) # -1
obj.put(4,4)
print(obj.get(1)) # -1
print(obj.get(3)) # 3
print(obj.get(4)) # 4







