function red () {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

function tic (time, cb) {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, time)
    });
}

function step() {
    Promise.resolve().then(() => {
        return tic(3000, red);
    }).then(() => {
        return tic(2000, yellow);
    }).then(() => {
        return tic(1000, green);
    }).then(() => {
        step();
    });
}

function call () {
    step();
}

module.exports = call;