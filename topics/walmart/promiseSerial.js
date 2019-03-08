function promiseSerial () {
    const p1 = new Promise((resolved) =>{
        resolved(1);
    });
    const p2 = new Promise((resolved) =>{
        resolved(2);
    });
    const p3 = new Promise((resolved) =>{
        resolved(3);
    });

    [p1, p2, p3].reduce((prev, cur) => {
        return prev.then((prevValue) => {
            return cur.then((curValue) => {
                return [...prevValue, curValue];
            });
        });
    }, Promise.resolve([])).then((v) => {
        console.log(v);
    });
}

function call(){
    promiseSerial();
}

module.exports = call;