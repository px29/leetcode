function throttle (fn, delay) {
    let timeId;
    let last;
    return function () {
        const self = this;
        const args = arguments;
        if (last && last + delay >= Date.now()) {
            console.log('time');
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                last = Date.now();
                fn.apply(self, args);
            }, delay);
        } else {
            
            last = Date.now();
            console.log(last);
            fn.apply(self, args);
        }
    }
}

const throttle1 = function (fn, delay) {
    let timeId;
    let last;
    return function () {
        const self = this;
        const args = arguments;
        if (last && last + delay > Date.now()) { // 还没到下次执行的时刻。
            clearTimeout(timeId); // 清空上次执行的结果。为了保证在时间间隔之内，只执行时间间隔之内的最后一次操作。
            timeId = setTimeout(() => {
                fn.apply(self, args);
                // last = Date.now();
            }, delay);
        } else {
            // 大于等于时间间隔的时候，直接执行
            last = Date.now();
            fn.apply(self, args);
        }
    }
}


function throttle4 (fn, delay) {
    let timeID;
    let last;
    return function () {
        const self = this;
        const args = arguments;
        if (last && last + delay > Date.now()) {
            clearTimeout(timeID);
            timeID = setTimeout(() => {
                fn.apply(self, args);
            }, delay);
        } else {
            last = Date.now();
            fn.apply(self, args);
        }
    }
}
module.exports = throttle4;