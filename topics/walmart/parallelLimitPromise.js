function task (i) {
    return () => (new Promise(function(resolve) {
        setTimeout(() => {
            resolve(i);
        }, 1000);
    }));
}

function generateTasks(amount) {
    const list = [];
    for (let i = 0; i < amount; i++) {
        list.push(task(i));
    }
    return list;
}
let l = 0;
function parallelLimitHelper (tasks, callback) {
   for (let i = 0; i < tasks.length && l > 0; i++) {
       const t = tasks.pop();
       t().then(callback).then(() => {l++}).then(parallelLimitHelper(tasks, callback));
       l--;
   }
}

function parallelLimit(tasks, limit, callback) {
    l= limit;
    parallelLimitHelper(tasks, callback);
}

module.exports = {
    parallelLimit,
    generateTasks
};

