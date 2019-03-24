var alienOrder = function(words) {
    const graph = new Map();
    const degree = new Map();
    for (const s of words) {
        for (let i = 0; i < s.length; i++) {
            degree.set(s[i], 0);
        }
    }
    let prev = undefined;
    for (const w of words) {
        if (!prev) {
            prev = w;
        } else {
            for (let i = 0; i < prev.length && i < w.length; i++) {
                if (prev[i] !== w[i]) {
                    if (graph.has(prev[i]) ) {
                        graph.get(prev[i]).add(w[i]);
                    } else {
                        const set = new Set();
                        set.add(w[i]);
                        graph.set(prev[i], set);
                    }
                    if (degree.has(w[i])) {
                        degree.set(w[i], degree.get(w[i]) + 1);
                    } else {
                        degree.set(w[i], 1);
                    }
                }
            }
        }
    }
    const queue = [...degree.keys()].filter(e => degree.get(e) === 0);
    let r = "";
    while (queue.length > 0) {
        const c = queue.shift();
        r += c;
        for (const n of [...graph.get(c)]) {
            degree.set(n, degree.get(n) - 1);
            if (degree.get(n) === 0) {
                queue.push(n);
            }
        }
    }
    return r;
};

function call() {
    console.log(alienOrder([
        "wrt",
        "wrf",
        "er",
        "ett",
        "rftt"
      ]));
}

module.exports = call;