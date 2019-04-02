var prisonAfterNDays = function(cells, N) {
    let prev = new Array(cells.length);
    const map = new Map();
    while (N > 0) {
        N--;
        map.set(cells.join(''), N);
        for (let i = 0; i < cells.length; i++) {
            if (i > 0 && i < cells.length - 1 && cells[i + 1] === cells[i - 1]) {
                prev[i] = 1;
            } else {
                prev[i] = 0;
            }
        }
        if (map.has(prev.join(''))) {
            N %= map.get(prev.join('')) - N;
        }
        cells = prev.slice();
    }
    return cells;
};

function call() {
    console.log(prisonAfterNDays([0, 1, 1, 0, 0, 0, 0, 0], 7));
}

module.exports = call;