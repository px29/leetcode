function dfs(gragh, names, start, end, set, r, temp) {
    if (start === end) {
        const t = [...temp, end];
        r.push(t.join(' '));
        return;
    }    
    if (!gragh.has(start)) {
        return;
    }
    set.add(start);
    const nodes = gragh.get(start);
    const name = names.get(start);
    for (let i = 0; i < nodes.length; i++) {
        if (!set.has(nodes[i])) {
            temp.push(`${start} ${name[i]}`);
            dfs(gragh, names, nodes[i], end, set, r, temp);
            temp.pop();
        }    
    }
    set.delete(start);
}


function relationship(relationList, inputList) {
    const relation = new Map();
    const names = new Map();
    for (const r of relationList) {
        if (!relation.has(r[0])) {
            relation.set(r[0], []);
            names.set(r[0], []);
        }
        relation.get(r[0]).push(r[2]);
        names.get(r[0]).push(r[1]);
    }
    const r = [];
    for (const i of inputList) {
        if (i[0] !== i[1]) {
            dfs(relation, names, i[0], i[1], new Set(i[0]), r, []);
        }
    }
    return r;
}

function call() {
    console.log(relationship( [    ['Bart',  'brother',   'Lisa'    ],
            ['Bart',  'son',      'Homer'    ],
            ['Marge', 'wife',     'Homer'    ],
          ['Lisa',  'daughter', 'Homer'   ]    ], [['Bob', 'Bob']]));
}