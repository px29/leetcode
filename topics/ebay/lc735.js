var asteroidCollision = function(asteroids) {
    if (!asteroids || asteroids.length === 0) {
       return asteroids;
    }
    const stack = [];

    for (const a of asteroids) {
        let notA = false;
        while (stack.length > 0 && stack[stack.length - 1] > 0 && a < 0) {
            if (Math.abs(stack[stack.length - 1]) === Math.abs(a)) {
                stack.pop();
                notA = true;
                break;
            } else if (Math.abs(stack[stack.length - 1]) > Math.abs(a)) {
                notA = true;
                break;
            } else {
                notA = false;
                stack.pop();
            }
        }
        if (!notA) {
            stack.push(a);
        }
    }
    return stack;

}; 

function call () {
    console.log(asteroidCollision([-2,1,-1,-2]));
}

module.exports = call;