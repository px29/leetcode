function myPromise (flag) {
    return new Promise(function(resolved, rejected){
        if (flag) {
            resolved('123');
        } else {
            rejected(new Error('rejected'));
        }
    });
}

function call() {
    const p = myPromise(true);
    p.then(console.log).catch((e) => {
        console.log(e.message);
    })
}

module.exports = call;