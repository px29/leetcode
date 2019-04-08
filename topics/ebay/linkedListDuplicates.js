function ListNode (val) {
    this.val = val;
    this.next = null;
}

function genrateLists(arr) {
    let dummy = new ListNode(0);
    let c = dummy;
    for (const r of arr) {
        c.next = new ListNode(r);
        c = c.next;
    }
    return dummy.next;
}


function removeDuplicates(list) {
    if (!list) {
        return null;;
    }
    let cur = list;
    const map = new Map();
    while (cur !== null) {
        if(map.has(cur.val)) {
            map.set(cur.val, map.get(cur.val) + 1);
        } else {
            map.set(cur.val, 1);
        }
        cur = cur.next;
    }
    map.forEach((value, key) => {
        if (value > 1) {
            map.delete(key);
        }
    });
    let dummy = new ListNode(0);
    cur = dummy;
    while (list !== null) {
        if (map.has(list.val)) {
            cur.next = list;
            cur = cur.next;

        }
        list = list.next;
    }
    cur.next = null;
    return dummy.next;
}

function call() {
    const l = genrateLists([1,2,3,8,2,1,7]);
    let r = removeDuplicates(l);
    while (r !== null) {
        console.log(r.val);
        r = r.next;
    }
}

module.exports = call;