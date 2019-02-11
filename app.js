const LC = require("./topics/amazon/oa/ShortestPath.js");

const result = LC(
  [
    [1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 1, 9]
  ]
);
console.log(result);