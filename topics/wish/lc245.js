
var shortestWordDistance = function(words, word1, word2) {
    let last;
    let first;
    let r = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            last = i;
        }
        if (words[i] === word2) {
            if (last) {
                first = last;
            }
            last = i;
            r = Math.min(r, last - first);
        }
        
    }
    return r;
};

function call() {
    console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"));
}

module.exports = call;