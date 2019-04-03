
function oddLayerOfTree(root) {
    const r = [];
    const queue = [];
    queue.push(root);
    let level = 1;
    while (queue.length > 0) {
        const size = queue.length;
        let t = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
                t.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
        }
        if (level % 2 === 1) {
            r.push(t);
        }
        level++;
    }
    return r;
}

const root = new 

function call () {
    console.log(oddLayerOfTree);
}

module.exports = call;