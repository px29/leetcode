var numMatchingSubseq = function(S, words) {
    // 这个题首先我想到的是统计和trie。
     // 核心是，快速的找到可以构成的字符
     // [a, ab, abc, abcd, abcde, ac, acd, acde, ad, ade]
     // [b, bc, bcde]
     // 根据大神解法，我们可以把words 序列化, 放到一个map或者数组中： <char, [word, char[]]>
     // 所有的char[] 都是以char 开头的word
     const map = new Map();
     for (const w of words) {
         if (!map.has(w[0])) {
             map.set(w[0], [w,[]]);
         }
         map.get(w[0])[1].push(w.split(''));
     }
     for (const s of S) {
         if (map.has(s)) {
             const list = map.get(s);
             map.delete(s);
             for (const l of list) {
                 l[1].shift();
                 if (map.has(l[1][0])) {
                    map.get(l[1][0]).push(l);
                 } else {
                     map.set(l[1][0], l);
                 }
             }
         }
     }
     console.log(map);
 };

 function call () {
     console.log(numMatchingSubseq([]));
 }

 module.exports = call;