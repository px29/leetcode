function Point(x, y, path) {
    this.x = x;
    this.y = y;
    this.path = path;
}

function inbound (x, y, matrix) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
}

const Dx = [0, 1, -1, 0];
const Dy = [1, 0, 0, -1];

function shortestPath (matrix) {
    const queue = [];
    const start = new Point(0, 0, [[0, 0]]);
    queue.push(start);
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const head = queue.shift();
            if (matrix[head.x][head.y] === 9) {
                return head.path;
            }
            matrix[head.x][head.y] = -1;
            for (let i = 0; i < 4; i++) {
                const x = head.x + Dx[i];
                const y = head.y + Dy[i];
                if (inbound(x, y, matrix) && matrix[x][y] !== -1 && matrix[x][y] !== 0) {
                    const clone = head.path.slice(0);
                    clone.push([x, y]);
                    queue.push(new Point(x, y, clone));
                }
            }
        }
    }
    return [];
}

module.exports = shortestPath;