function promiseAll() {
    const p1 = new Promise((resolved, rejected) => {
        resolved(1);
    });

    const p2 = new Promise((resolved, rejected) => {
        resolved(1);
    });

    const p3 = new Promise((resolved, rejected) => {
        rejected('rejected3');
    });

    const r = Promise.all([p1, p2, p3]);
    r.then((v) => {
        console.log(v);
    }).catch((e) => {
        console.log(e);
    });

}
function call() {
    const r = promiseAll();
    console.log(r);
}

module.exports = call;