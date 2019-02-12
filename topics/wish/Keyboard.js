function distance(prev, current) {
    if (prev && current) {
        const disX = Math.abs(prev[0] - current[0]);
        const disY = Math.abs(prev[1] - current[1]);
        if (disX === 2 || disY === 2) {
            return 2;
        } else if (disX === 1 || disY === 1) {
            return 1;
        } else {
            return 0;
        }
    }
    return -1;
}

// string 5555, 1234567789. keypad 抄图片上的
function keyboard(string, keypad) {
    const map = new Map();
    for (let i = 0; i < keypad.length; i++) {
        for (let j = 0; j < keypad[i].length; j++) {
            map.set(keypad[i][j], [i, j]);
        }
    }
    let result = 0;
    let pre = undefined;
    for (const s of string) {
        if (pre) {
            const prevLocation = map.get(pre);
            const currentLocation = map.get(s);
            const dis = distance(prevLocation, currentLocation);
            result += dis;
        }
        pre = s;
    }
    return result;
}

module.exports = keyboard;
