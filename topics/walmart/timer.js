function timer (start, end, interval) {
    
    const timeId = setInterval (() => {
        if (start < end) {
            console.log(start);
            start++;
        } else {
            clearInterval(timeId);
        }
    }, interval); 

    return {cancel: () => {clearInterval(timeId)}};
}


function call() {
    const c = timer(1, 100, 100);
    setTimeout(() => {
        c.cancel();
    }, 5000)
}

module.exports = call;