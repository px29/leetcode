function ListNode(val) {
    this.val = val;
    this.next = null;
}

function generateList () {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    return head;
}


var swapPairs = function(head) {
    let a = head;
    const dummy = new ListNode(0);
    let temp = dummy;
    while (a !== null && a.next !== null) {
        const next = a.next.next;
        const b = a.next;
        b.next = a;
        temp.next = b;
        temp = a;
        a = next;
    }
    
    if (a) {
        temp.next = a;
        a.next = null;
    } else {
        a = null;
    }
    
    return dummy.next;
};

module.exports = {
    generateList,
    swapPairs
};