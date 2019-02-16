
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let pointer = head;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        const result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        const node = new ListNode(result % 10);
        carry = Math.floor(result / 10);
        pointer.next = node;
        pointer = pointer.next;
    }
    return head;
};