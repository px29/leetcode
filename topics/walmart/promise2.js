function promise2 () {
    return new Promise(function(resolved, rejected) {
        if (true) {
            resolved(1);
        } else {
            rejected();
        }
        // return new Promise((r) => {
        //     r(1);
        // });
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
    console.log(p);
    p.then((v) => {
        console.log(v, p);
    }, (e) => {
        console.log(e);
    })
}

module.exports = call;