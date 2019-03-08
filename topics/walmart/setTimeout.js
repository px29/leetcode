function setTimeout1() {
    for (var i = 0; i < 10; i++) {
        ((j) => {
            setTimeout(function () {
                console.log(j);
            }, 10);
        })(i)
           
    }
}

function call() {
    setTimeout1();
}

module.exports = call;