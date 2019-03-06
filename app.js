const f = require('./topics/walmart/throttle');

function a(x) {
    console.log(x, Date.now());
}
const t = f(a, 2000);
t(1);
t(1);
t(1);
t(1);
t(1);
t(1);