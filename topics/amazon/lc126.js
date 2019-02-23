/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

function changeOneChar(word, wordSet) {
    const s = word.split('');
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        for (let j = 0; j < 26; j++) {
            s[i] = String.fromCharCode(j + 97);
            const potential = s.join('');
            if (wordSet.has(potential)) {
                result.push(potential);
            }
        }
        s[i] = p;
    }
    return result;
}

function dfs(beginWord, endWord, wordSet, result, temp, map) {
    if (beginWord === endWord) {
        result.push(temp.slice(0));
        return;
    }
    if (result.length > 0 && temp.length > result[0].length) {
        return;
    }
    const potentials = map.get(beginWord) || changeOneChar(beginWord, wordSet);
    map.set(beginWord, potentials);
    for (const p of potentials) {
        if (!temp.includes(p)) {
            temp.push(p);
            dfs(p, endWord, wordSet, result, temp, map);
            temp.pop(p);
        }
    }
}

var findLadders = function(beginWord, endWord, wordList) {
    // dfs + memory
    let result = [];
    const map = new Map();
    const wordSet = new Set(wordList);
    dfs(beginWord, endWord, wordSet, result, [beginWord], map);
    result.sort((a, b) => a.length - b.length);
    let i = 0;
    if (result.length > 0) {
        const t = result[0].length;
        for (i = 0; i < result.length; i++) {
            if (result[i].length > t) {
                break;
            }
        }
    }
    return result.slice(0, i);
};

module.exports = findLadders;
