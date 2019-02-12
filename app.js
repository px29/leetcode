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
  root
);
console.log(result);