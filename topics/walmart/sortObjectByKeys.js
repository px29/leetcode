function sortObjectsByKeys(arr) {
    return arr.sort((a, b) => a.a - b.a);
}

function call(){
    console.log(sortObjectsByKeys([
        { a:1, b:7 },
        { a:3, b:1 },
        { a:2, b:3 }
      ]));
}

module.exports = call;