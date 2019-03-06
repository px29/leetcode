function throttle(fn, time) {
    let timeId;
    let last;

    return function () {
        const self = this;
        const args = arguments;
        const now = Data.now();
        if (last && last + time >= now) {
            
        }
    }
}