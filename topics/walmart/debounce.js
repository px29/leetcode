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

function debounce1(fn, delay) {
    let timeId;
    return function () {
        const self = this;
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            fn.apply(self, arguments);
        }, delay);
    }
}
module.exports = debounce;