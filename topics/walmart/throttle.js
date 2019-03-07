function throttle(fn, time) {
    let timeId;
    let last;
    time || (time = 1000);

    return function () {
        const self = this;
        const args = arguments;
        const now = Date.now();
        if (last && last + time > now) {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                last = now;
                fn.apply(self, args);
            }, time);
        } else {
            last = now;
            fn.apply(self, args);
        }
    }
}
module.exports = throttle;