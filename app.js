const f = require('./topics/amazon/clone');
const r = f({a: '1', b: '5', c: [1,2,3], d: {}});
console.log(r);