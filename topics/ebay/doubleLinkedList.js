function ListNode (val) {
    this.val = val;
    this.next = null;
    this.nextRow = null;
}

function DoubleLinkedList() {
    // 要保证水平方向是排列好的
    // 也要保证垂直方向是排列好的
    this.head = new ListNode('h');
}

DoubleLinkedList.prototype.add = function(values) {
    let prev = this.head;
    let cur = this.head.next;
    function generateList(values) {
        const dummy = new ListNode(0);
        let h = dummy;
        for (const d of values) {
            h.nextRow = new ListNode(d);
            h = h.nextRow;
        }
        return dummy.nextRow;
    }
    const newList = generateList(values);
    while (cur !== null) {
        if (prev !== this.head && prev.val <= newList.val && cur.val > newList.val) {
            prev.next = newList;
            newList.next = cur;
            return;
        }
        prev = cur;
        cur = cur.next;
    }
    prev.next = newList;
}

DoubleLinkedList.prototype.sort = function () {
    let h = this.head.next;
    const c = [];
    while (h !== null) {
        c.push(h);
        h = h.next;
    }
    sort(c); // merge k sorted list
}

function call () {
    const doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.add([1,2,3,4,5]);
    doubleLinkedList.add([4,5,6,7,8]);
    console.log(doubleLinkedList);

}

module.exports = call;