/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

var sortList = function(head) {
    
};

head = [4,2,1,3]

var createLinkList = function (head) {
    let root = null
    let current = null
    if (head[0]) {
        root = new ListNode(head[0], null)
        current = root
    }
    if (head.length > 1) {
        for (let i = 1;i < head.length;i++) {
            current.next = new ListNode(head[i], null)
            current = current.next
        }

    }
    return root
}

head = createLinkList(head)

sortList(head)