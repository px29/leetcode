function task (id) {
    return (cb) => {
        setTimeout(() => {
            cb(id);
        }, 1000);
    } 
}

function generateTasks(amount) {
    const r = [];
    for (let i = 0; i < amount; i++) {
        r.push(task(i));
    }
    return r;
}

function parallelLimit (tasks, limit, callback) {
    callback || (typeof callback === 'function' ? callback : console.log);
    let running = 0;
    function process () {
        while (running < limit && tasks.length > 0) {
            running++;
            const task = tasks.shift();
            task(function(id){
                running--;
                callback(id, Date.now());
                if (tasks.length > 0) {
                    process();
                } 
            });
        }
    }
    process();
}

module.exports = {
    generateTasks,
    parallelLimit,
}