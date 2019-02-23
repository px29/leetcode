function changeOneChar(beginWord, visited, wordList) {
    const x = beginWord.split('');
    const result = [];
    for (let i = 0; i < x.length; i++) {
        const pre = x[i];
        for (let j = 0; j < 26; j++) {
            x[i] = String.fromCharCode(j + 97);
            const temp = x.join('');
            if (temp !== beginWord && !visited.has(temp) && wordList.includes(temp)) {
                result.push(temp);
                visited.add(temp);
            }
        }
        x[i] = pre;
    }
    return result;
}

var ladderLength = function (beginWord, endWord, wordList) {
    const map = new Map();
    let dis = 1;
    const list = [];
    const visited = new Set();

    visited.add(beginWord);
    visited.add(endWord);
    list.push(beginWord);
    list.push(endWord);
    while (list.length > 0) {
        const size = list.length;
        for (let i = 0; i < size; i++) {
            const word = list.shift();
            let temp = map.get(word) || changeOneChar(word, visited, wordList);
            map.set(word, temp);
            for (const t of temp) {
                list.push(t);
                visited.add(t);
            }
        }
        dis++;
    }
    return 0;
};

module.exports = ladderLength;