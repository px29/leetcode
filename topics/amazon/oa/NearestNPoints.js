function distance (loc, target) {
    return Math.pow((target[0] - loc[0]), 2) + Math.pow((target[1] - loc[1]), 2); // distance
}

function nearestNPoints (locations, target, n) {
    const temp = []; // each element contains the distance that for sorting later
    const result = [];
    for (const l of locations) {
        const dis = distance(l, target);
        temp.push([...l, dis]);
    }
    temp.sort((a, b) => a[2] - b[2]);
    for (let i = 0; i < temp.length && i < n; i++) {
        result.push([temp[i][0], temp[i][1]]);
    }
    return result;
}

module.exports = nearestNPoints;