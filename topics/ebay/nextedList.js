function helper (lists, level) {
    if (!lists || lists.length === 0) {
        return;
    }
    let r = 0;
    for (const l of lists) {
        if (typeof l === "number") {
            r += l * level ;
        } else {
            r += level * helper(l, level + 1);
        }
    }
    return r;
}

function calNestedList(lists) {
   return helper (lists, 1);
}

function call () {
    console.log(calNestedList([1,1,[1,[1]]]))
}

module.exports = call;