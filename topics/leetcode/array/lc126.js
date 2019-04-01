function changeOneChar (w, bSet, wSet, temp) {
    let s = w.split('');
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        for (let j = 0; j < 26; j++) {
            s[i] = String.fromCharCode(j + 97);
            const t = s.join('');
            if (!bSet.has(t) && wSet.has(t)) {
                temp.add(t);
                wSet.delete(t);
            }
        }
        s[i] = p;
    }
}

var findLadders = function(beginWord, endWord, wordList) {
    // 优化，双端bfs
    // 如果碰头了，找到相容的
    let r = [];
    let bSet = new Set();
    let eSet = new Set();
    let wSet = new Set(wordList);
    bSet.add(beginWord);
    eSet.add(endWord);
    
    while (bSet.size > 0 && eSet.size > 0) {
        if (bSet.size > eSet.size) {
            let set = bSet;
            bSet = eSet;
            eSet = set;
        }
        let temp = new Set(); 
        for (const b of bSet) {
            console.log(b);
            changeOneChar(b, bSet, wSet, temp);
        }
        bSet = temp;
    }
    
};

function call() {
    console.log(findLadders('hit', 'cog',["hot","dot","dog","lot","log","cog"]));
}

module.exports = call;