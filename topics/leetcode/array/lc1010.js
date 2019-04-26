var numPairsDivisibleBy60 = function(time) {
    // 对余数two sum
    const map = new Map();
    let r = 0;
    for (const t of time) {
        const re = t % 60;
        if (map.has((60 - re) % 60)) {
            r += map.get((60 - re) % 60);
        }
        if (!map.has(re)) {
            map.set(re, 1);
        } else {
            map.set(re, map.get(re) + 1);
        }
    }
    return r;
};

function call() {
    console.log(numPairsDivisibleBy60([60,60]));
}

module.exports = call;