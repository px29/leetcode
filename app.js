const WordSearch = require("./topics/array/WordSearch79.js");

const result = WordSearch.exist(
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],
  "G"
);
console.log(result);
