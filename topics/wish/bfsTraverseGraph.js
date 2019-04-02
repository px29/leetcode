var a = function(edges) {
    const graph = new Map();
    const degree = new Map();
    for (const e of edges) {
        for (const n of e) {
            degree.set(n, 0);
        }
    }
    for (const e of edges) {
        if (graph.has(e[0])) {
            graph.set(e[0], [...graph.get(e[0]), e[1]]);
        } else {
            graph.set(e[0], [e[1]]);
        }
        if (degree.has(e[1])) {
            degree.set(e[1], degree.get(e[1]) + 1);
        } else {
            degree.set(e[1], 1);
        }
    }
    const queue = [];
    degree.forEach((value, key) => {
        if (value === 0) {
            queue.push(key);
        }
    });
    let r = [];
    while (queue.length > 0) {
        let n = queue.shift();
        r.push(n);
        if (graph.has(n)) {
            const sub = graph.get(n);
            for (const s of sub) {
                degree.set(s, degree.get(s) - 1);
                if (degree.get(s) === 0) {
                    queue.push(s);
                }
            }
        }
    }
    return r;
};

function call () {
    console.log(a([[0,1], [0,2], [0,3], [1,4]]));
}

module.exports = call;