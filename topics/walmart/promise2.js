function promise2 () {
    return new Promise(function(resolved, rejected) {
        if (true) {
            resolved(1);
        } else {
            rejected();
        }
    }).then((resolve) => {
        return new Promise((resolved, rejected) => {
            resolved(1);
        })
    }).catch((e) => {
        console.log(e);
    })
}

function call () {
    const p = promise2();
    p.then((v) => {
        console.log(v);
    }, (e) => {
        console.log(e);
    })
}

module.exports = call;