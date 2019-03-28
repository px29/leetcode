function UnionFind (n) {
    this.father = new Array(n);
    this.count = n;
    for(let i = 1; i <= n; i++) {
        this.father[i] = i;
    }
    // for (let i = 0; i < grid.length; i++) {
    //     for (let j = 0; j < grid[i].length; j++) {
    //         if (grid[i][j] === '1') {
    //             this.count++;
    //             this.father[i * grid[0].length + j] = i * grid[0].length + j;
    //         }       
    //     }
    // }
}

UnionFind.prototype.find = function(x) {
    if (x === this.father[x]) {
        return x;
    }
    this.father[x] = this.find[x];
    return this.father[x];
}

UnionFind.prototype.union = function (a, b) {
    const root_a = this.find(a);
    const root_b = this.find(b);
    if (root_a !== root_b) {
        this.father[root_a] = root_b;
        this.count--;
    }
}

function call() {
    const unionFind = new UnionFind(10);
    unionFind.union(1, 2);
    console.log(unionFind.count);
}

module.exports = call;