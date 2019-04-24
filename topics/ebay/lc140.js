function helper (s, wordDict, map) {
    if (map.has(s)) {
        return map.get(s);
    }
    const r = [];
    if (s.length === 0) {
        r.push('');
        return r;
    }
    for (const w of wordDict) {
        const t = helper(s.substring(w.length), wordDict, map);
        for (const c of t) {
            r.push(w + (c.length === 0 ? "" : " ") + c);
        }
    }
    map.set(s, r);
    return r;
}

var wordBreak = function(s, wordDict) {
    return helper(s, wordDict, new Map());
};

function call () {
    console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
}

module.exports = call;