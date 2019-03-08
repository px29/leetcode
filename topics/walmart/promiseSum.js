const fetch = require('node-fetch');

function promiseSum (n) {
    const promises = [];
    for (let i = 0; i < n; i++) {
        promises.push(fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'));
    }
    let sum = 0;
    Promise.all(promises).then((res) => {
        res = res.map((r) => r.text());
        
        Promise.all(res).then(r => {
            console.log(r);
            for (const i in r) {
                sum += parseInt(r[i]);
                console.log(parseInt(r[i]));
            }   
            console.log(sum);
        });
    }).catch(err => {
        console.error(err);
    })
   
}

function call() {
    promiseSum(2);
}

module.exports = call;