function debounce (fn, delay) {
    let timeID;
    return function() {
        const self = this;
        clearTimeout(timeID);
        timeID = setTimeout(() => {
            fn.apply(self, arguments);
        }, delay);
    }
}

module.exports = debounce;