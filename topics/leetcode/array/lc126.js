/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function changeOneChar(beginWord, words) {
    const a = beginWord.split('');
    let r = [];
    for (let i = 0; i < a.length; i++) {
        const p = a[i];
        for (let j = 0; j < 26; j++) {
            const c = String.fromCharCode(97 + j);
            if (c !== p) {
                const t = a.join('');
                if (words.has(t)) {
                    r.push(t);
                    words.delete(t);
                }
            }
        }
        a[i] = p;
    }
    return r;
}

function bfs (beginWord, endWord, words, distance, neighbor) {
    const queue = [];
    queue.push(beginWord);
    distance.set(beginWord, 0);
    neighbor.set(beginWord, []);
    let flag = false;
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const dis = distance.get(node);
            const potentials = changeOneChar(node, words);
            
            for (const p of potentials) {
                if (neighbor.has(node)) {
                    neighbor.get(node).push(p);
                } else {
                    neighbor.set(node, [p]);
                }
                if (!distance.has(p)) {
                    distance.set(p, dis + 1);
                }
                if (p === endWord) {
                    flag = true;
                } else {
                    queue.push(p);
                }
            }
            
        }
        if (flag) {
            break;
        }
    }
} 


function dfs (beginWord, endWord, distance, neighbor, r, temp) {
    temp.push(beginWord);
    if (beginWord === endWord) {
        r.push(temp.slice());
        return;
    }
    for (const n of neighbor.get(beginWord)) {
        if (distance.get(n) === distance.get(beginWord) + 1) {
            dfs(n, endWord, distance, neighbor, r, temp);
        }
    }
}
var findLadders = function(beginWord, endWord, wordList) {
    // 首先是bfs 找深度，然后是dfs 得到最短的lists
    const distance = new Map(); // distance: nodes
    const neighbor = new Map(); 
    const words = new Set(wordList);
    const r = [];
    bfs(beginWord, endWord, words, distance, neighbor);
    dfs(beginWord, endWord, distance, neighbor, r, []);
    return r;
};

function call () {
    console.log(findLadders("hit",
    "cog",
    ["hot","dot","dog","lot","log","cog"]));
}

module.exports = call;