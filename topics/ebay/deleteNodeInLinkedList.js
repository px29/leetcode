function ListNode(val) {
    this.val = val;
    this.next = null;
}

function deleteNode (list, node) {
    const dummy = new ListNode(0);
    let h = dummy;
    dummy.next = list;
    let cur = list;
    while (cur !== null && cur.val !== node.val) {
        cur = cur.next;
        h = h.next;
    }
    let next = cur.next;
    h.next = next;
    return dummy.next;

}

function deleteNodeWithCircle(list, node) {
    const dummy = new ListNode(0);
    let h = dummy;
    dummy.next = list;
    let cur = list;
    while (cur !== null && cur.val !== node.val) {
        cur = cur.next;
        h = h.next;
    }
    let next = cur.next;
    if (next.val === cur.val) {
        h.next = null;
    } else {
        cur = null;
        h.next = next;
    }
    return dummy.next;
}

function generateList(arr) {
    let dummy = new ListNode(0);
    let h = dummy;
    for (const a of arr) {
        h.next = new ListNode(a);
        h = h.next;
    }
    h.next = dummy.next;
    return dummy.next;
}

function call () {
    let l = generateList([1,2,3]);
    let r = deleteNodeWithCircle(l, new ListNode(1));
    // r = deleteNode(l, new ListNode(1));
    let count = 0;
    while (r !== null && count++ < 6) {
        console.log(r.val);
        r = r.next;
    }
}

module.exports = call;