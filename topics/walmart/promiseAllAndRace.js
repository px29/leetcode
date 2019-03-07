function promise () {
    const p1 = new Promise((resolved, rejected) => {
        resolved(1);
    });
    const p2 = new Promise((resolved, rejected) => {
        resolved(2);
    })
    const p3 = new Promise((resolved, rejected) => {
        resolved(3);
    })

    const promise = Promise.all([p1, p2, p3]);
    promise.then((v) => {
        console.log(v);
    });
}

function call() {
    promise();
}
module.exports = call;