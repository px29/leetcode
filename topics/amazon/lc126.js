function changeOneChar(word, visited, wordList) {
    const s = word.split('');
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        for (let j = 0; j < 26; j++) {
            s[i] = String.fromCharCode(j + 97);
            const temp = s.join('');
            if (!visited.includes(temp) && wordList.includes(temp)) {
                result.push(temp);
            }
        }
        s[i] = p;
    }
    return result;
}

function dfs(beginWord, endWord, wordList, result, temp) {
    if (beginWord === endWord) {
        result.push(temp.slice(0));
        return;
    }
    const t = changeOneChar(beginWord, temp, wordList);
    for (let i = 0; i < t.length; i++) {
        temp.push(t[i]);
        dfs(t[i], endWord, wordList, result, temp);
        temp.pop();
    }
    
}

var findLadders = function(beginWord, endWord, wordList) {
    // DFS
    const result = [];
    dfs(beginWord, endWord, wordList, result, [beginWord]);
    return result;
};


module.exports = findLadders;