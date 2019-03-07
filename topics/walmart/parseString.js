function parseString (arr) {
    const map = {};
    for (const a of arr) {
        const t = a.split('|');
        const date = new Date(t[0] * 1000);
        const parseDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
        if (!map.hasOwnProperty(parseDate)) {
            map[parseDate] = [t[1]];
        } else {
            map[parseDate].push(t[1]);
        }
    }

    for (const p in map) {
        console.log(p, ':', map[p]);
    }
}

module.exports = parseString;