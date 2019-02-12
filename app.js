const LC = require("./topics/walmart/lc98.js");

function Node(left = null, right = null, value) {
  this.left = left;
  this.right = right;
  this.value = value;
}

const root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

const result = LC(
  [
    [1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 1, 9]
  ]
  root
);
console.log(result);