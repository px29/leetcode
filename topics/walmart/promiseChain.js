function foo() {
    console.log('foo');

    return new Promise(resolve => {
        console.log('foo timeout before');

        setTimeout(() => {
            console.log('foo timeout');

            resolve('foo resolved');
        }, 1000);

        console.log('foo timeout after');
    });
}

function bar() {
    console.log('bar');

    return new Promise(resolve => {
        console.log('bar timeout before');

        setTimeout(() => {
            console.log('bar timeout');

            resolve('bar resolved');
        }, 3000);

        console.log('bar timeout after');
    });
}

// 1
//   foo().then(function(res) {
//     console.log('inside then 1: ' + res);
//     return bar();
//   }).then(function(res) {
//     console.log('inside then 2: ' + res);
//   })

// 我认为的顺序（1）
// foo
// foo timeout before
// foo timeout after
// foo timeout
// inside then 1: foo resolved
// bar
// bar timeout before
// bar timeout after
// bar timeout
// inside then 2: bar resolved


// 2
//   foo().then(bar).then(function(res) {
//     console.log('inside then 2: ' + res);
//   });

// 我认为的顺序2
// foo
// foo timeout before
// foo timeout after
// foo timeout
// bar
// bar timeout before
// bar timeout after
// bar timeout 
// inside then 2: bar resolved

// 3
//   foo().then(bar()).then(function(res) {
//     console.log('inside then 2: ' + res);
//   })

// 我认为的顺序3
// foo
// foo timeout before
// foo timeout after
// foo timeout
// 我认为的不对，因为一旦then（） 接受了一个非函数的参数，那么会产生一个不是fufilled 或者rejected 的Promise，这样下一个then 的状态会被当前then 之前的状态决定。

// // foo
// foo timeout before
// foo timeout after
// bar 因为返回了一个Promise， 那么then（） 会被立即执行，then 里面是个函数statement，那么直接执行bar（）函数。
// bar timeout before
// bar timeout after
// foo timeout foo（）只设置了1秒，
// inside then 2: foo timeout 因为第一个then 里面不是函数，是函数的执行结果，那么会跳到第二个then
// bar timeout

// 4
//   foo().then(function(res) {
//     console.log('inside then 1: ' + res);
//     bar();
//   }).then(function(res) {
//     console.log('inside then 2: ' + res);
//   });

// 我认为的执行结果4
// foo
// foo timeout before
// foo timeout after
// inside then 1: foo timeout
// bar
// bar timeout before
// bar timeout after
// inside then 2: undefined 我缺少的部分
// bar timeout

// 我写的不对，最后那个then 也会被call 的

function call() {
    foo().then(function (res) {
        console.log('inside then 1: ' + res);
        bar();
    }).then(function (res) {
        console.log('inside then 2: ' + res);
    });
}

module.exports = call;