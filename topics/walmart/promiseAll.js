function promiseAll() {
    const p1 = new Promise((resolved, rejected) => {
        resolved(1);
    });

    const p2 = new Promise((resolved, rejected) => {
        resolved(2);
    });

    const p3 = new Promise((resolved, rejected) => {
        // rejected('rejected3');
        resolved(3);
    });

    // const r = Promise.race([p1, p2, p3]);
    // r.then((v) => {
    //     console.log(v);
    // }).catch((e) => {
    //     console.log(e);
    // });
    return [p1, p2, p3].reduce((prev, cur) => {
        return prev.then(() => {
            return cur.then(v => {
                console.log(v);
            });
        })
    }, Promise.resolve());

}

function testReducer () {
    const a = [1,2,3,4,5,6,7,8,9];
    return a.reduce((accu, current) => {
        return accu + current;
    }, 120)

}
function call() {
    const r = promiseAll();
    console.log(r);
    const rr = testReducer();
    console.log(rr);
}

module.exports = call;